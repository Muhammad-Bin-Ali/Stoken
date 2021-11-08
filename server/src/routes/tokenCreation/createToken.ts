import { Request, Response } from "express";
import deployToken from "./NFTscripts/deploy";
import User, { IToken } from "../../schemas/User";
import { v4 as uuidv4 } from "uuid";

interface Address {
  address: string;
}

export default async function createToken(req: Request, res: Response) {
  const { name, symbol, decimal, supply } = req.body;

  if (typeof name !== "string") {
    res.status(400).json({
      message: "`name` must be of type string",
    });
    return;
  }

  if (typeof symbol !== "string") {
    res.status(400).json({
      message: "`symbol` must be of type string",
    });
    return;
  }

  if (typeof decimal !== "number") {
    res.status(400).json({
      message: "`decimal` must be of type number",
    });
    return;
  }

  if (typeof supply !== "number") {
    res.status(400).json({
      message: "`supply` must be of type number",
    });
    return;
  }

  const userId = req.session.userId!;
  const user = await User.findById(userId);

  if (!user) {
    res.status(500).json({
      message: "User not found",
    });
    return;
  }

  console.log("FUCKOFF");

  deployToken(name, symbol, decimal, supply)
    .then((response: Address) => {
      const contactAddress = response.address;
      const token: IToken = { id: uuidv4(), name, symbol, decimal, supply, contactAddress, createdTimestamp: new Date() };

      console.log(token);
      console.log(user);
      console.log(user.tokens);

      user.tokens.push(token);
      user.save().then(() => {
        res.status(202).json({
          message: response.address,
          tokens: user.tokens ?? [],
        });
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(500).json({
        message: "Token Creation Failed",
      });
    });
}
