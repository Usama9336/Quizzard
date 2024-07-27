import Newone from "../modals/newquiz.js"
//get all user

export const getallquiz=async(req,res,next)=>{
try{
const newquiz=await Newone.find()
res.status(200).json(newquiz)
}
catch(err){
    next(err)
}
}
export const createquiz=async(req,res)=>{
   const {heading,passcode,questions,answers}=req.body
    // const data = JSON.parse(jsonstring);
    // console.log(req.body);
    // console.log(data);
    // console.log(username,feedback);
    try {
        const newpost = await Newone.create({
            heading:heading,
            passcode:passcode,
        });
        console.log(newpost);
    } catch (error) {
        console.log(error);
    }
}
