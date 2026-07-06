import express from "express";
import { checkAuth } from "../middlewares/checkAuth";
import {
    addWishValidation,
    deleteWishValidation,
    editWishValidation,
} from "../validations/wishValidation";
import { validateRequest } from "../middlewares/errorHandler";
import { addWish, deleteWish, editWish } from "../controllers/wishController";

const wishRouter = express.Router();

wishRouter.post("/addwish", checkAuth, addWishValidation, validateRequest, addWish);
wishRouter.put("/editwish/:id", checkAuth, editWishValidation, validateRequest, editWish);
wishRouter.delete("/deletewish/:id", checkAuth, deleteWishValidation, validateRequest, deleteWish);

export default wishRouter;
