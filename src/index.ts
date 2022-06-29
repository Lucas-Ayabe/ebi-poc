import express from "express";
import { SignInInteractor } from "./interactors";
import {
  SignInBoundary,
  EncryptionBoundary,
  UserRepositoryBoundary,
} from "./boundaries";

const app = express();
const port = 3000;

const signInBoundary = new SignInBoundary(
  new SignInInteractor({
    userRepository: new UserRepositoryBoundary(),
    encryptionService: new EncryptionBoundary(),
  })
);

app.get("/auth", signInBoundary.signIn);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
