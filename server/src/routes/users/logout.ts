import { Request, Response } from "express";

export default async function logout(req: Request, res: Response) {
  // destroy session to logout
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session", err);
      throw err;
    }

    res.status(200).json({
      message: "Logged out!",
    });
  });
}
