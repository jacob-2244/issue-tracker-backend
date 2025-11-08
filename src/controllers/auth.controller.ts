import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email required" });
  return res.json({ success: true, email });
};
