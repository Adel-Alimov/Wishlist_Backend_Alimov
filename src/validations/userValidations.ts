import { param } from "express-validator";

export const getUserValidation = [param("id").isMongoId().withMessage("Invalid user ID")];
