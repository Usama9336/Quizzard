import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const [name,setname]=useState("")
  const [pass,setpass]=useState("")
  const [em,setem]=useState("")
const navi=useNavigate()
const sendtodata=async()=>{
const newclient={
  username:name,
  email:em,
  password:pass
}
const res=await axios.post("http://localhost:9000/user/user",newclient)
console.log(res);
if(res){
  navi("/quiz")
}
else{
  console.log('hello')
}
console.log(res.data)
}
localStorage.setItem('myData', JSON.stringify({presentname:name}));

  return (
    <div className=' h-screen mx-auto w-[50%] pt-[7rem]' >
<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[30rem] shadow-2xl'>
<p className=' text-center pt-[1rem] text-[25px] block
 '>Signup/Register</p>
 <div className='items-center pt-[6rem] gap-[2rem] flex flex-col'>
 <input className='rounded-[0.5rem]' type="text" placeholder='Enter The Username' 
  value={name} onChange={(e)=>setname(e.target.value)}/>
<input type="password" className='rounded-[0.5rem]' placeholder='Enter The Password' value={pass} onChange={(e)=>setpass(e.target.value)} />
<input type="email" className='rounded-[0.5rem]' placeholder='Enter The Email' 
 value={em} onChange={(e)=>setem(e.target.value)}/>
<button type="submit" className='hover:opacity-[80%] border-[0px] border-[0px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[2px] p-[0.5rem]' onClick={sendtodata}>Signup</button>
 </div>
 </div>
 </div>
  )
}
