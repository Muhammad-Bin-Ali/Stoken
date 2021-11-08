import { Request, Response } from "express";
import deployToken from "./NFTscripts/deploy";

interface Address {
  address: string;
}

export default async function createToken(req: Request, res: Response) {
  console.log("works");
  const tokenName = req.body.name;
  const tokenSymbol = req.body.symbol;
  const tokenDecimal = req.body.decimal;
  const tokenSupply = req.body.supply;

  console.log(tokenName, tokenSymbol, tokenDecimal, tokenSupply);

  deployToken(tokenName, tokenSymbol, tokenDecimal, tokenSupply)
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
