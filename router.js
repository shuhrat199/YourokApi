import { Router } from "express";
import Controller from "./Controller.js";


const router = new Router();

router.get("/historyTest", Controller.getHistory)
router.get("/geogrTest", Controller.getGeog)
router.get("/literTest", Controller.getliter)
export default router;