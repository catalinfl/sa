import mongoose from "mongoose"
import express from "express"
import { getQuery } from "../controllers/querySearch";

const router = express.Router();
router.get('/query', getQuery);




export default router;
