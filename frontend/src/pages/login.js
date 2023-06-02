import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

 function Login() {

const [name,setname]=useState("")
const [pass,setpass]=useState("")
const [clientdata,setclientdata]=useState([])
useEffect(() => {
 const fetchdata=async()=>{
    try{
const res=await axios.get("http://localhost:9000/user/user")
setclientdata(res.data)
console.log(res.data)
  }


  catch(err){
console.log(err)
  }
}
  fetchdata()
}, [])

const [num,setnum]=useState(0)
const navi=useNavigate();
const senttoquiz=()=>{
clientdata.map((data)=>{
   if(data.username===name&&data.password===pass)
{     setnum(1)
  localStorage.setItem('myData', JSON.stringify({presentname:name}));
}
     return num   
})
if(num===1)
{navi("/quiz")
}
else
{
    console.log("user not present")
}
}

const navigate=useNavigate();
  return (
    <div className=' h-screen mx-auto w-[50%] pt-[7rem]' >
<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[30rem] shadow-2xl'>
<p className=' text-center pt-[3rem] text-[25px] block
 '>LOGIN</p>
 <div className='items-center pt-[6rem] gap-[2rem] flex flex-col'>
 <input type="text" className='rounded-[0.5rem]' placeholder='Enter The Username' 
 value={name}  onChange={(e)=>setname(e.target.value)}/>
<input type="password" className='rounded-[0.5rem]' placeholder='Enter The Password' value={pass} onChange={(e)=>setpass(e.target.value)} />
<button type="submit" className='border-[0px] border-[0px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[2px] p-[0.5rem] hover:opacity-[80%]' onClick={senttoquiz}>Login</button>
 </div>
 <div className='mx-auto w-[30%] pl-[2rem]'>
 <button className='text-center hover:text-[blue] pt-[2rem]' onClick={()=>{
    navigate("/signup")
 }}>Not a User / Signup</button>
 </div>
</div>

    </div>
  )
}
export default Login