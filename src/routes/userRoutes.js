

import express from 'express';
import { setTime } from '../middleware/time.js';
import { SignIn, SignUp } from '../controllers/usersController.js';
import { testValidations } from '../validations/userValidation.js';

const userRouter = express.Router();

userRouter.post('/create', testValidations, setTime, SignUp);
userRouter.get('/usertList', SignIn);
// userRouter.get('/id/:id', getEventById);
// userRouter.put('/id/:id', updateEvent);
// userRouter.delete('/id/:id', deleteEvent);

export default userRouter;
