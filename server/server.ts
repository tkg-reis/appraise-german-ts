import express from 'express';
import mongoose from'mongoose';
import "dotenv/config"
const app = express();

const PORT = 3000;

app.use("/api", express.json());

mongoose.connect(process.env.MONGOURI!).then(() => {
    console.log("connected to mongoDB");
    console.log(process.env.MONGOURI);
    
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})