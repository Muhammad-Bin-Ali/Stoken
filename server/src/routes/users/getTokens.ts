import { Request, Response } from "express";
import User from "../../schemas/User";

export default async function getTokens(req: Request, res: Response) {
  const userId = req.session.userId!;
  const user = await User.findById(userId);
  if (!user) throw "User not found";

  res.send(200).json({
    tokens: user.tokens,
  });
}
