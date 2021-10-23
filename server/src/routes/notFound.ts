import { Request, Response } from "express";

export default function login(req: Request, res: Response) {
  res.status(404).json({
    message: "Page not found",
  });
}
