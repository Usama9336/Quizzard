import React from 'react'
import { useEffect,useState } from 'react'
 

function content() {

const [data,setData]=useState([])
console.log(data)
useEffect(() => {
 fetchData=async()=>{
    const url="/questions/questions"
try {
    const response=await axios.get(url);
    setData(data);
} catch (error) {
    console.log(err)
}
  }
fetchData();
}, [])



  return (
    <div>

{
    console.log(data)
}

    </div>
  )
}
export default content;