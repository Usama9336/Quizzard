import mongoose from 'mongoose'
const {Schema}=mongoose;
// const subschema=new mongoose.schema({
  
// })
const scoreSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    score:{
        type:String,
        required:true,
        unique:true
    },
   })
    export default mongoose.model("Score",scoreSchema)