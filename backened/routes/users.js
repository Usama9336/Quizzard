import express from "express";
import {createuser} from "../controllers/user.js"
import {getalluser} from "../controllers/user.js"
const router=express.Router()
router.get("/questions",getalluser)
router.post('/questions',createuser)
export default router