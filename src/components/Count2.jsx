import React, { useState } from 'react'

function Count2() {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount((precount)=>precount+1)
    }
  return (
    <div>
        <h2>count :</h2>
        <button type='button' onClick={increment}>click to change</button>
    </div>
  )
}

export default Count2;