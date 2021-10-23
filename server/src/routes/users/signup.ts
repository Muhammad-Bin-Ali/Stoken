import { Request, Response } from "express";
import User, { usernameRegex, emailRegex, passwordRegex, SALT_ROUNDS } from "../../schemas/User";
import bcrypt from "bcrypt";
import generateVerificationCode from "../../util/generateVerificationCode";

const ONE_HOUR = 60 * 60 * 1000;

export default async function signup(req: Request, res: Response) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // validation!

  if (typeof username !== "string") {
    res.status(400).json({
      message: "Username must be provided as a string.",
    });
    return;
  }

  if (typeof email !== "string") {
    res.status(400).json({
      message: "Email must be provided as a string.",
    });
    return;
  }

  if (typeof password !== "string") {
    res.status(400).json({
      message: "Password must be provided as a string.",
    });
    return;
  }

  if (!username.match(usernameRegex)) {
    res.status(401).json({
      message: "Invalid username.",
    });
    return;
  }

  if (!email.match(emailRegex)) {
    res.status(401).json({
      message: "Invalid email.",
    });
    return;
  }

  if (!password.match(passwordRegex)) {
    res.status(401).json({
      message: "Invalid password.",
    });
    return;
  }

  const usernameLower = username.toLowerCase();
  const emailLower = email.toLowerCase();

  const takenUsername = await User.exists({ usernameLower });
  if (takenUsername) {
    res.status(401).json({
      message: "Username is taken.",
    });
    return;
  }

  const takenEmail = await User.exists({ "email.addressLower": emailLower });

  if (takenEmail) {
    res.status(401).json({
      message: "Email is taken.",
    });
    return;
  }

  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const verificationCode = generateVerificationCode(6);

  // create new user!

  const user = new User({
    username,
    usernameLower,
    email: {
      address: email,
      addressLower: emailLower,
      verified: false,
      verificationCode,
      verificationExpiry: Date.now() + ONE_HOUR,
    },
    hash,
  });

  user
    .save()
    .then(async (usr) => {
      req.session.user = { id: usr._id, username: usr.username };

      res.status(201).json({
        message: "User created!",
      });

      // TODO: send verification email here
    })
    .catch((err) => {
      console.log("Error creating user", err);
      res.status(500).json({
        message: "Internal server error.",
      });
    });
}
