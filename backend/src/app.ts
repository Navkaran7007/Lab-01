import express from "express";
import cors from "cors";
import helmet from "helmet";
import roleRoutes from "./api/v1/routes/roleRoutes";

const app = express();

app.use(helmet());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true
}));
app.use(express.json());

app.use("/api/roles", roleRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Lab 4.1 Backend API is running" });
});

export default app;
