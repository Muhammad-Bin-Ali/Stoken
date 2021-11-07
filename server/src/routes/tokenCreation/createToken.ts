import { Request, Response } from "express";
import deployToken from "./NFTscripts/deploy";

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

  deployToken(name, symbol, decimal, supply)
    .then((response: Address) => {
      res.status(202).json({
        message: response.address,
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(500).json({
        message: "Token Creation Failed",
      });
    });
}
