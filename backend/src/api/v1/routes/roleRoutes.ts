import { Router } from "express";
import { getRoles, createPerson } from "../controllers/roleController";
import { requireAuth, requireAdmin, requireOrganizationMember } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, requireOrganizationMember, getRoles);
router.post("/", requireAuth, requireAdmin, createPerson);

export default router;
