import { body } from "express-validator";

export const testValidations = [
    body("Firstname", "your name is required").not().isEmpty(),
    body("Lastname", "your name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
];
