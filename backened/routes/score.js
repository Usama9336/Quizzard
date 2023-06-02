import express from "express";
import {createscore} from "../controllers/score.js"
import {getallscore} from "../controllers/score.js"
const router=express.Router()
router.get("/score",getallscore)
router.post('/score',createscore)
export default router