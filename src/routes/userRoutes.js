

import express from 'express';
import { setTime } from '../middleware/time.js';
import { signup,signin, deleteUserById } from '../controllers/usersControllers.js';
import { testValidations } from '../validations/userValidation.js';
import { sendEmail } from '../utils/sendEmail.js';

const userRouter = express.Router();

userRouter.post('/create', testValidations, setTime, signup);
userRouter.post('/create/login', testValidations, signin);
userRouter.post('/contact',sendEmail)
// userRouter.get('/usertList', SignIn);
// userRouter.get('/id/:id', getEventById);
// userRouter.put('/id/:id', updateEvent);
userRouter.delete('/id/:id', deleteUserById);

export default userRouter;
