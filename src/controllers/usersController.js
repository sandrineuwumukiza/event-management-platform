import Users from "../models/userModel.js";
import asyncWrapper from "../middleware/async.js";
import bcryptjs from 'bcryptjs';
import { BadRequestError } from "../errors/index.js";
import { validationResult } from "express-validator";




export const SignUp = asyncWrapper(async (req, res, next) => {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }

    // Checking if the user is already in using the email
    const foundUser = await Users.findOne({ email: req.body.email });
    if (foundUser) {
        return next(new BadRequestError("Email already in use"));
    };

    // Harshing the user password
    const hashedPassword = await bcryptjs.hashSync(req.body.password, 10);

    // Generating OTP
   //  const otp = otpGenerator();
   //  const otpExpirationDate = new Date().getTime() + (60 * 1000 * 5);

    // Recording the user to the database
    const newUser = new Users({
        Firstname: req.body.Firstname,
        LastName: req.body.Lastname,
        email: req.body.email,
        password: hashedPassword,
      //   otpExpires: otpExpirationDate,
    });

    const savedUser = await newUser.save();
    // console.log(savedUser);
   //  `Your OTP is ${otp}`
    await sendEmail(req.body.email, "Verify your account");

    if (savedUser) {
        return res.status(201).json({
            message: "User account created!",
            user: savedUser
        });
    }
});


export const SignIn = asyncWrapper(async (req, res, next) => {
   // Validation
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return next(new BadRequestError(errors.array()[0].msg));
   }

   // Find user
   const foundUser = await Users.findOne({ email: req.body.email });
   if (!foundUser) {
       return next(new BadRequestError("Invalid email or password!"));
   };

   // Check account verification
   if (!foundUser.verified) {
       return next(new BadRequestError("Your account is not verified!"));
   }

   // Verify password
   const isPasswordVerfied = await bcryptjs.compareSync(req.body.password, foundUser.password);
   if (!isPasswordVerfied) {
       return next(new BadRequestError("Invalid email or password!"));
   }

   // Generate token

  //  const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

   res.status(200).json({
       message: "User logged in!",
       token: token,
       user: foundUser
   });
});




