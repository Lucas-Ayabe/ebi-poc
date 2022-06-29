import { User } from "../entities";
import { DatabaseLib } from "../lib/database";

export class UserRepositoryBoundary {
  constructor(private _database = new DatabaseLib()) {
    this._database.connect();
  }

  async findByEmail(email: string): Promise<User> {
    return User.from(email, "secret123");
  }
}
