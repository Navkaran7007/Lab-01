import express from "express";
import cors from "cors";
import helmet from "helmet";
import roleRoutes from "./routes/roleRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
