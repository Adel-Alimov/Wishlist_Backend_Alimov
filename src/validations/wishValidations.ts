import { body, param } from "express-validator";

export const addWishValidation = [
    body("imageURL").optional().isURL().withMessage("Invalid URL format"),
    body("caption")
        .notEmpty()
        .withMessage("Caption is required")
        .isLength({ min: 2 })
        .withMessage("Min length must be 2"),
    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isInt({ gt: 0 })
        .withMessage("price should be min 0"),
    body("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 3 })
        .withMessage("Min length must be 3"),
    body("wishURL")
        .notEmpty()
        .withMessage("wishURL is required")
        .isURL()
        .withMessage("Invalid URL format"),
];

export const editWishValidation = [
    param("id").isMongoId().withMessage("Invalid wish ID"),
    body("imageURL").optional().isURL().withMessage("Invalid URL format"),
    body("caption")
        .notEmpty()
        .withMessage("Caption is required")
        .isLength({ min: 2 })
        .withMessage("Min length must be 2"),
    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isInt({ gt: 0 })
        .withMessage("price should be min 0"),
    body("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 3 })
        .withMessage("Min length must be 3"),
    body("wishURL")
        .notEmpty()
        .withMessage("wishURL is required")
        .isURL()
        .withMessage("Invalid URL format"),
];

export const deleteWishValidation = [param("id").isMongoId().withMessage("Invalid wish ID")];
