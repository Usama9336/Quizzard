import mongoose from 'mongoose'
const {Schema}=mongoose;
// const subschema=new mongoose.schema({
  
// })

   const AnswerSchema = new Schema({
    id: { type: String, required: true },
    text: { type: String, required: true }
  });
  const QuestionSchema=new Schema({
    id: { type: String, required: true },
    text: { type: String, required: true },
    answers: [AnswerSchema],
    correctAnswer: { type: String, required: true }
  })
  const NewQuesSchema = new Schema({
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
    questions: [QuestionSchema]
  });

    export default mongoose.model("NewQues",NewQuesSchema)