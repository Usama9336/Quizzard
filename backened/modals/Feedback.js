import mongoose from 'mongoose'
const {Schema}=mongoose;
// const subschema=new mongoose.schema({
  
// })
const feedSchema=new mongoose.Schema({
    questions:{
        type:String,
        required:true,
        unique:true
    },
   answers:{
        type:String,
        required:true,
        unique:true
    }
   })
    export default mongoose.model("Users",feedSchema)