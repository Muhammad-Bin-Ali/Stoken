import crypto from "crypto";

const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyz1234567890";

/**
 * Generate a non-pseudorandom verification code of given length.
 * Uses a random integer from crypto as an index to allowed characters.
 */

export default function generateVerificationCode(len: number) {
  let code = "";

  for (let i = 0; i < len; i++) {
    const randomIdx = crypto.randomInt(ALLOWED_CHARACTERS.length); // not including the upper bound
    const randomChar = ALLOWED_CHARACTERS.charAt(randomIdx);

    code += randomChar;
  }

  return code;
}
