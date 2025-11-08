import mongoose, { Schema, Document } from "mongoose";

export interface IIssue extends Document {
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
  createdAt: Date;
  updatedAt: Date;
}

const IssueSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved"],
      default: "Open",
    },
    assignee: { type: String, default: "Unassigned" },
  },
  { timestamps: true }
);

export default mongoose.model<IIssue>("Issue", IssueSchema);
