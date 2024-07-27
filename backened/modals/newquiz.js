import mongoose from 'mongoose'
const {Schema}=mongoose;
// const subschema=new mongoose.schema({
  
// })
const newSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        unique:true
    },
    passcode:{
        type:String,
        required:true,
        unique:true
    },
   })
    export default mongoose.model("Newone",newSchema)