import express from "express";
import {createquiz} from "../controllers/newquiz.js"
import {getallquiz} from "../controllers/newquiz.js"
const router=express.Router()
router.get("/newquiz",getallquiz)
router.post('/newquiz',createquiz)
export default router