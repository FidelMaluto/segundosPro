import express from "express";
import {
    getRemed,
    addRemed,
    upDateRemed,
    deleteRmed
} from "../controllers/remed.js";

const router = express.Router();

router.get("/", getRemed);

router.post("/", addRemed);

router.put("/:id", upDateRemed);

router.delete("/:id", deleteRmed);

export default router;
