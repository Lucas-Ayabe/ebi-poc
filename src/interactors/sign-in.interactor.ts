import { EncryptionBoundary, UserRepositoryBoundary } from "../boundaries";
import { InvalidCredentialsError } from "./invalid-credentials.error";

export interface SignInCommand {
  email: string;
  password: string;
}

export type SignInOutput = string;

interface SignInProps {
  encryptionService: EncryptionBoundary;
  userRepository: UserRepositoryBoundary;
}

export class SignInInteractor {
  private encryptionService: EncryptionBoundary;
  private userRepository: UserRepositoryBoundary;

  constructor({ encryptionService, userRepository }: SignInProps) {
    this.encryptionService = encryptionService;
    this.userRepository = userRepository;
  }

  async execute(command: SignInCommand): Promise<SignInOutput> {
    const user = await this.userRepository.findByEmail(command.email);
    const isReallyTheUser = this.encryptionService.compare(
      user.password,
      command.password
    );

    if (!isReallyTheUser) {
      throw new InvalidCredentialsError(command.email, command.password);
    }

    return this.encryptionService.encrypt(user.email + "secret");
  }
}
