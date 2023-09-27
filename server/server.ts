import env from "dotenv";
env.config();
import express from 'express';
import type { Express, Request, Response } from 'express';
import "../database/db";
import apiRoutes from "./api-routes/index";
const app: Express = express();

const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => res.send('Hello German!'));



app.use("/api", express.json());

app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})