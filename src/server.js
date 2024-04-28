import express from "express";
import mongoose from "mongoose";
import Configs from "./config/index.js"
import router from "./routes/index.js";




// Server middlewares
const app = express();
app.use(express.json());
app.use('/api', router);

// Database connectivity

mongoose.connect(Configs.MONGODB_CONNECTION_STRING)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.listen(Configs.PORT, () => console.log(`Server is running on port ${Configs.PORT}`))

