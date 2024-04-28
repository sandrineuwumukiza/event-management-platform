
import express from "express";
import eventRouter from "./eventRoutes.js";
import userRouter from "./userRoutes.js";
// import dashBoardRouter from "./adminRoutes.js";

const router = express.Router();

router.use('/event', eventRouter)
router.use('/user', userRouter)
// router.use('admin', dashBoardRouter);


export default router