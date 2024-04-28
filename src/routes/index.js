
import express from "express";
import eventRouter from "./eventRoutes.js";
import userRouter from "./userRoutes.js";


const router = express.Router();

router.use('/event', eventRouter)
router.use('/user', userRouter)



export default router