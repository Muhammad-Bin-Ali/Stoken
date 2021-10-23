import { NextFunction, Request, Response } from "express";

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  console.log("isAuthenticated");

  if (!req.session.userId) {
    res.status(401).json({
      message: "Unauthorized.",
    });
  } else {
    next();
  }
}
