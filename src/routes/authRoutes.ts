import express from "express";
import { loginValidation, registerValidation } from "../validations/authValidations";
import { validateRequest } from "../middlewares/errorHandler";
import { loginUser, registerUser } from "../controllers/authController";

const authRoter = express.Router();
authRoter.post("/register", registerValidation, validateRequest, registerUser);
authRoter.post("/login", loginValidation, validateRequest, loginUser);

export default authRoter;
