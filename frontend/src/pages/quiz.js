import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Quiz() {
  const [clientscore,setclientscore]=useState([])
  const [quesdata,setquesdata]=useState([])
  const myData = JSON.parse(localStorage.getItem('myData'));

  useEffect(() => {
   const fetchdata=async()=>{
      try{
  const res=await axios.get("http://localhost:9000/questions/questions")
  setquesdata(res.data)
  console.log(res.data)
    }
    catch(err){
  console.log(err)
    }
  }
    fetchdata()
  }, [])
  const [i,seti]=useState(0);
const [ans,setans]=useState("")
const [score,setscore]=useState(0)
const len = quesdata.length;
const navigate=useNavigate()
const sendnext=(p)=>{
  console.log("hii")
  if(quesdata[p]?.answers===ans)
  {
    setscore(score+100)
    seti(p+1);
    
  }
  else{
    seti(p+1)
    console.log("Wrong Answer Try again")
  }
}

const sendtodb=async()=>{
  const saveuser={
    username:myData.presentname,
    score:score
  }
  const res=await axios.post("http://localhost:9000/score/score",saveuser)
  console.log(res);
}

useEffect(() => {
  const fetchscore=async()=>{
     try{
 const res=await axios.get("http://localhost:9000/score/score")
 setclientscore(res.data)
 console.log(res.data)
   }
   catch(err){
    console.log(err)
      }
    }
      fetchscore()
    }, [])

//const len=quesdata.length()
  return (
    <div className='flex'>
      <div className=' h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl w-[20%]'>
<div className='bg-[blue]'>
<p className='text-[20px] text-center'>{myData.presentname}</p>
<p className='text-[17px] text-center'>score: {score}</p>
</div>

{clientscore?
clientscore.map((data)=>{
return <div className='bg-[green]'>
<p className='text-[20px] text-center'>{data.username}</p>
<p className='text-[17px] text-center'>score: {data.score}</p>
</div>
}):""
}
      </div>
    <div>
      <div className='flex justify-between'><p className=''></p><button className='text-right  border-[0px] border-[0px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-[2px] p-[0.5rem] hover:opacity-[80%] text-[17px]' onClick={()=>navigate("/")}>LogOut</button></div>
      {i<=len-1?
<div className='items-center flex flex-col p-[14rem]'>
    <p className='text-[27px] font-block'>Question {`${i+1}`} : {quesdata[i]?.questions}</p>
    <input type="text" onChange={(e)=>setans(e.target.value)} className='m-[2rem]' />
    <button className='text-[white] border-[0px] outline-[black] border-radius-[5px] p-[5px] bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-[60%]' type='button' onClick={()=>sendnext(i)}>Submit</button>
</div>:<div className='p-[14rem]'>
<p className='text-[27px] '>Congratulations ! You have completed the Quiz with Score : {score} </p>
<p className='text-center pt-[1rem]'><button className='text-[white] border-[0px] outline-[black] border-radius-[5px] p-[5px] bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-[60%] ' onClick={sendtodb} >Click Here to Save Your Score</button></p>

</div> 
}    
</div>
    </div>
  )
}
