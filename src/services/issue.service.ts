


import { FilterQuery } from "mongoose";
import Issue, { IIssue } from "../models/issue.model";

type StatusType = "Open" | "In Progress" | "Resolved";



export const createIssue = async (data: Partial<IIssue>): Promise<IIssue> => {
  const issue = new Issue(data);
  return issue.save();
};


export const getIssues = async (
  status?: string,
  priority?: string
): Promise<IIssue[]> => {
  const query: FilterQuery<IIssue> = {};


  if (status === "Open" || status === "In Progress" || status === "Resolved") {
    query.status = status;
  }


  if (priority === "Low" || priority === "Medium" || priority === "High") {
    query.priority = priority;
  }

  return Issue.find(query).sort({ createdAt: -1 });
};


export const getIssueById = async (id: string): Promise<IIssue | null> => {
  return Issue.findById(id);
};


export const updateIssue = async (
  id: string,
  data: Partial<IIssue>
): Promise<IIssue | null> => {
  return Issue.findByIdAndUpdate(id, data, { new: true });
};


export const getSummary = async (): Promise<{
  byStatus: { _id: StatusType; count: number }[];
  byAssignee: { _id: string; count: number }[];
}> => {
  const byStatus = await Issue.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  const byAssignee = await Issue.aggregate([
    { $group: { _id: "$assignee", count: { $sum: 1 } } },
  ]);

  return { byStatus, byAssignee };
};
