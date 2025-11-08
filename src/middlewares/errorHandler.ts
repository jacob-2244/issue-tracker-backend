



import { Request, Response, NextFunction } from "express";
import { failure } from "../utils/response";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  void _next; 
  const errorMessage = err instanceof Error ? err.message : String(err);
  res.status(500).json(failure("Internal Server Error", errorMessage));
};
