import express from "express";
import {
    getUsers, 
    addUser,
    upDateUser,
    deleteUser
} from "../controllers/user.js";

const router = express.Router();
 router.get("/", getUsers);

 router.post("/", addUser);

 router.put("/:id", upDateUser);

 router.delete("/:id", deleteUser);
 
 export default router;
