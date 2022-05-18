import { Router } from "express";
import Controller from "./Controller.js";


const router = new Router();

router.get("/historyTest", Controller.getHistory)

export default router;