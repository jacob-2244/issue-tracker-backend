import { Router } from "express";
import {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  getSummary,
} from "../controllers/issue.controller";

const router = Router();

router.post("/", createIssue);
router.get("/", getIssues);
router.get("/summary", getSummary);
router.get("/:id", getIssueById);
router.patch("/:id", updateIssue);

export default router;
