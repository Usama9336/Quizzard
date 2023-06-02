import Score from "../modals/score.js"
//get all user

export const getallscore=async(req,res)=>{
try{
    const allscore=await Score.find()
    res.status(200).json(allscore)
}
catch(err){
    console.log(err)
}
}
export const createscore=async(req,res)=>{
   const {username,score}=req.body
    // const data = JSON.parse(jsonstring);
    // console.log(req.body);
    // console.log(data);
    // console.log(username,feedback);
    try {
        const newscore = await Score.create({
            username:username,
            score:score,
        });
        res.status(200).json({newscore})
    } catch (error) {
        console.log(error);
    }
}
