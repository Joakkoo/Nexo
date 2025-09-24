import { Router } from "express";
import * as companyController from "../../controllers/company.controller";
import { authenticateToken } from "../../middleware/auth";
import { requireRole } from "../../middleware/auth";


const router = Router();

// Todas las rutas requieren superadmin
router.use(authenticateToken);

router.get("/", companyController.getAll);
router.get("/:id", companyController.getById);
router.post("/", companyController.create);
router.put("/:id", companyController.update);
router.delete("/:id", companyController.remove);

export default router;
