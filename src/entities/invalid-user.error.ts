export class InvalidUserError extends Error {
  public readonly name = "InvalidUserError";
  constructor(email: string, password: string) {
    super(
      `Invalid user with info: ${JSON.stringify({
        email,
        password,
      })}`
    );
  }
}
