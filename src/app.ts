import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";
import issueRoutes from "./routes/issue.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


connectDB();


app.use("/issues", issueRoutes);
app.use("/auth", authRoutes);


app.use(errorHandler);

export default app;
