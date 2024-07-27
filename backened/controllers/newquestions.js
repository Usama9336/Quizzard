import NewQues from "../modals/newquestions.js"
//get all user

export const getallquestions=async(req,res,next)=>{
try{
const alluser=await NewQues.find()
res.status(200).json(alluser)
}
catch(err){
    next(err)
}
}
export const createquestions=async(req,res)=>{
   //const {questions}=req.body
   const { heading, passcode, questions } = req.body;
    try{
    await NewQues.create({
        heading:heading,
        passcode:passcode,
        questions:questions
    });
    // const data = JSON.parse(jsonstring);
    // console.log(req.body);
    // console.log(data);
    // console.log(username,feedback);
   // try {
     //   const newquestions = await NewQues.create({
       //     questions:questions,
        //});
        //console.log(questions);
    }
     catch (error) {
        console.log(error);
    }
}
