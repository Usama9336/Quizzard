import Client from "../modals/users.js"
//get all user

export const getallclient=async(req,res)=>{
try{
    const allclient=await Client.find()
    res.status(200).json(allclient)
}
catch(err){
    console.log(err)
}
}
export const createclient=async(req,res)=>{
   const {username,email,password}=req.body
    // const data = JSON.parse(jsonstring);
    // console.log(req.body);
    // console.log(data);
    // console.log(username,feedback);
    try {
        const newclient = await Client.create({
            username:username,
            email:email,
            password:password
        });
        res.status(200).json({newclient})
    } catch (error) {
        console.log(error);
    }
}
