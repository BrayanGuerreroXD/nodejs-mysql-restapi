import { Router } from "express";
import { employees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", employees.getEmployees);

router.post("/employees", employees.createEmployee);

router.put("/employees", employees.updateEmployee);

router.delete("/employees", employees.deleteEmployee);

export default router;
