export class InvalidCredentialsError extends Error {
  public readonly name = "InvalidCredentialsError";

  constructor(email: string, password: string) {
    super(
      `The credentials: ${JSON.stringify({
        email,
        password,
      })} are invalid`
    );
  }
}
