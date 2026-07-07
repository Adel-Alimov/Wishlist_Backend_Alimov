import express from "express";
import { getUser } from "../controllers/userController";

const userRoter = express.Router();
userRoter.get("/:id", getUser);

export default userRoter;
