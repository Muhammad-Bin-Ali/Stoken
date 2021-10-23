import { Request, Response } from "express";
import User from "../../schemas/User";
import bcrypt from "bcrypt";

export default async function login(req: Request, res: Response) {
  const usr = req.body.user;
  const password = req.body.password;

  // validation!

  if (typeof usr !== "string") {
    res.status(400).json({
      message: "User must be provided as a string.",
    });
    return;
  }

  if (typeof password !== "string") {
    res.status(400).json({
      message: "Password must be provided as a string.",
    });
    return;
  }

  const lower = usr.toLowerCase();

  // query a document that matches the username or email
  const userDoc = await User.findOne({
    $or: [{ "email.addressLower": lower }, { usernameLower: lower }],
  });

  if (userDoc === null) {
    res.status(401).json({
      message: "User not found",
    });
    return;
  }

  // compare the password with the other thing
  const correctPassword = await bcrypt.compare(password, userDoc.hash);
  if (correctPassword === false) {
    res.status(401).json({
      message: "Invalid password",
    });
    return;
  }

  // regenerate the session to log the user in!
  req.session.regenerate((err) => {
    if (err) {
      console.log("Error regenerating session", err);
      throw err;
    }

    req.session.userId = userDoc._id;

    res.status(200).json({
      message: "Authenticated!",
    });
  });
}
