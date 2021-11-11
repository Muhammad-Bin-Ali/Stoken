import { Request, Response } from "express";
import deployToken from "./NFTscripts/deploy";
import User, { IToken } from "../../schemas/User";
import { v4 as uuidv4 } from "uuid";

interface Address {
  address: string;
}

//server method that is called when a request is made to create a token
export default async function createToken(req: Request, res: Response) {
  //destructing data sent through request
  const { name, symbol, decimal, supply } = req.body;

  //checks to ensure that the data is of right type
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

  //retrieves user through their sessionID
  const userId = req.session.userId!;
  const user = await User.findById(userId);

  //if the user does not exist, then a message is sent back saying that the user was not found.
  //to prevent unauthenticated token creation
  if (!user) {
    res.status(500).json({
      message: "User not found",
    });
    return;
  }

  //calls the deployToken function to create token object
  deployToken(name, symbol, decimal, supply)
    .then((response: Address) => {
      //if token is successfully created, the newly created token's information is pushed into database
      //token address and user's past tokens created are returned via http request.
      const contactAddress = response.address;
      const token: IToken = { id: uuidv4(), name, symbol, decimal, supply, contactAddress, createdTimestamp: new Date() };

      user.tokens.push(token);
      user.save().then(() => {
        res.status(202).json({
          message: response.address,
          tokens: user.tokens ?? [],
        });
      });
    })
    .catch((err) => {
      //returns code 500 is token creation fails
      res.status(500).json({
        message: "Token Creation Failed",
      });
    });
}
