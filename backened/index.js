import express from "express"
import mongoose from "mongoose"
import usersRoute from "./routes/users.js"
import clientRoute from "./routes/client.js"
import scoreRoute from "./routes/score.js"
import quizRoute from "./routes/newquiz.js"
import newquesRoute from "./routes/newquestions.js"
import dotenv from "dotenv"
import cors from "cors";
//import Users from "../modals/Feedback.js"
const app=express()
dotenv.config()

const connect=async()=>{
    try {
        await mongoose.connect(process.env.Mongo)
console.log("connected to mongodb");
    } catch (err) {
        console.log(err);
        throw err;
    }
}
/*mongoose.connect.on("disconnected",()=>{
    console.log("mongodb disconnected")
})

mongoose.connect.on("connected",()=>{
    console.log("mongodb connected")
})*/
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Hello")
})
//middleware

app.use(express.json())
app.use("/questions",usersRoute)
app.use("/user",clientRoute)
app.use("/score",scoreRoute)
app.use("/newquiz",quizRoute)
app.use("/newquestions",newquesRoute)
/*app.get("/questions/questions",async(req,res)=>{
    try{
    const data=await Users.find({})
    res.json(data);
    }
    catch(error){
res.status(500).send(error)
    }
})*/
/*app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
const errorMessage=err.message || "Something went wrong"

  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage, 
    stack:err.stack,
})
})*/

app.listen(9000,()=>{
    connect()
    console.log("connected to Backened")
})