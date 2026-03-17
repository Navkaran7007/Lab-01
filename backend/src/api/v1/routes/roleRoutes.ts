import { Router } from "express";
import { getRoles, createPerson } from "../controllers/roleController";

const router = Router();

router.get("/", getRoles);
router.post("/", createPerson);

export default router;
