import express from "express"
import GermanRouter from "./germanWords"

const router = express.Router();
router.use("/germanWords", GermanRouter);

export default router;