import React, { useEffect, useState } from 'react'

function Effect() {
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("count value",count);
    },[count])
  return (
    <div>
        <h3>useEffect examples</h3>
        <h3>{count}</h3>
        <button type='button' onClick={()=>setCount(count+1)}>count</button>
        <button type='button' onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}

export default Effect;