import { body } from "express-validator";

export const testValidations = [
   
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Email is required and must be valid'),
        body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
       
];
