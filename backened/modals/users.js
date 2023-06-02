import mongoose from 'mongoose'
const {Schema}=mongoose;
// const subschema=new mongoose.schema({
  
// })
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
   password:{
        type:String,
        required:true,
        unique:true
    }
   })
    export default mongoose.model("Client",userSchema)