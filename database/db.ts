import mongoose from "mongoose";
import env from "dotenv";
env.config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGOURI!).then(() => {
        console.log("db connected");
    });

