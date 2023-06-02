import express from "express";
import {createclient} from "../controllers/client.js"
import {getallclient} from "../controllers/client.js"
const router=express.Router()
router.get("/user",getallclient)
router.post('/user',createclient)
export default router