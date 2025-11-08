import { Request, Response, NextFunction } from "express";
import * as issueService from "../services/issue.service";
import { success, failure } from "../utils/response";

export const createIssue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const issue = await issueService.createIssue(req.body);
    res.json(success("Issue created", issue));
  } catch (err) {
    next(err);
  }
};

export const getIssues = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status, priority } = req.query;
    const issues = await issueService.getIssues(status as string, priority as string);
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

export const getIssueById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const issue = await issueService.getIssueById(req.params.id);
    if (!issue) return res.status(404).json(failure("Issue not found"));
    res.json(issue);
  } catch (err) {
    next(err);
  }
};

export const updateIssue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const issue = await issueService.updateIssue(req.params.id, req.body);
    res.json(success("Issue updated", issue));
  } catch (err) {
    next(err);
  }
};

export const getSummary = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const summary = await issueService.getSummary();
    res.json(summary);
  } catch (err) {
    next(err);
  }
};
