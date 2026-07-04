import { body } from "express-validator";

export const registerValidation = [
    body("email")
        .isEmail()
        .withMessage("Invalid email format")
        .notEmpty()
        .withMessage("Email is required"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be min 6 symbols")
        .notEmpty()
        .withMessage("Password is required"),
    body("username").notEmpty().withMessage("Username is required"),
];

export const loginValidation = [
    body("email")
        .isEmail()
        .withMessage("Invalid email format")
        .notEmpty()
        .withMessage("Email is required"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be min 6 symbols")
        .notEmpty()
        .withMessage("Password is required"),
];
