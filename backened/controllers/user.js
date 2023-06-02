import Users from "../modals/Feedback.js"
//get all user

export const getalluser=async(req,res,next)=>{
try{
const alluser=await Users.find()
res.status(200).json(alluser)
}
catch(err){
    next(err)
}
}
export const createuser=async(req,res)=>{
   const {questions,answers}=req.body
    // const data = JSON.parse(jsonstring);
    // console.log(req.body);
    // console.log(data);
    // console.log(username,feedback);
    try {
        const newpost = await Users.create({
            questions:questions,
            answers:answers
        });
        console.log(newpost);
    } catch (error) {
        console.log(error);
    }
}
