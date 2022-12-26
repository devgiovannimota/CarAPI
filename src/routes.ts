import { Router } from "express";
import { CarController } from "./controller/carController";
const router = Router();
const carController = new CarController();

router.post("/car", carController.create);
router.get("/car", carController.show);
router.get("/car/:id", carController.getById);
router.put("/car/:id", carController.update);
router.delete("/car/:id", carController.delete);

export default router;
