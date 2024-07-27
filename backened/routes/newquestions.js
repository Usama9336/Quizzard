import express from "express";
import {createquestions} from "../controllers/newquestions.js"
import {getallquestions} from "../controllers/newquestions.js"
const router=express.Router()
router.get("/newquestions",getallquestions)
router.post('/newquestions',createquestions)
export default router