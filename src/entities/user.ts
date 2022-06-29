import { InvalidUserError } from "./invalid-user.error";

export class User {
  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static from(email: string, password: string) {
    if ([email, password].some((param) => param === "")) {
      throw new InvalidUserError(email, password);
    }

    return new User(email, password);
  }
}
