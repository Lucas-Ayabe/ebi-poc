import { Request, Response } from "express";
import { SignInInteractor } from "../interactors";

export class SignInBoundary {
  constructor(private signInUseCase: SignInInteractor) {
    this.signIn = this.signIn.bind(this);
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.signInUseCase.execute({ email, password });

      res.status(200).json({
        error: null,
        content: {
          token,
        },
      });
    } catch (error) {
      res.status(400).json({ content: null, error });
    }
  }
}
