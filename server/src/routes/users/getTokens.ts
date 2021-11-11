import { Request, Response } from "express";
import User from "../../schemas/User";

//function to return user's tokens in the database
export default async function getTokens(req: Request, res: Response) {
  const userId = req.session.userId!;
  const user = await User.findById(userId);

  if (!user) {
    res.status(500).json({
      message: "User not found",
    });
    return;
  }

  res.status(200).json({
    tokens: user.tokens,
  });
}
