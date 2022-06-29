import { EncryptionLib } from "../lib/encryptation";

export class EncryptionBoundary {
  constructor(private _lib = new EncryptionLib()) {}

  compare(hash: string, string: string): boolean {
    return this._lib.compare(hash, string);
  }

  encrypt(string: string): string {
    return this._lib.encrypt(string);
  }
}
