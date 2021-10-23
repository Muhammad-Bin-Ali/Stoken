import { Request, Response } from "express";
import User from "../../schemas/User";

export default async function verifyEmail(req: Request, res: Response) {
  const userId = req.session.user!.id;
  let guessedCode = req.body.code;

  if (typeof guessedCode !== "string") {
    res.status(400).json({
      message: "Code must be provided as a string.",
    });
    return;
  }

  guessedCode = guessedCode.toLowerCase(); // not case sensitive!

  const userDoc = await User.findById(userId);
  if (!userDoc) {
    res.status(401).json({
      message: "User not found",
    });
    return;
  }

  const realCode = userDoc.email.verificationCode;

  // if the code in the request matches the generated code in the user's document, we are all good to verify their emaiL!
  if (!realCode || realCode !== guessedCode) {
    res.status(401).json({
      message: "Incorrect code.",
    });
    return;
  }

  userDoc.email.verified = true;

  userDoc
    .save()
    .then(() => {
      res.status(200).json({
        messaage: "Email verified!",
      });
    })
    .catch((err) => {
      console.log("Error saving document while verifying email", err);
      throw err;
    });
}
