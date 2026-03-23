import React, { useState } from 'react'

function Color() {
    const[color,setColor]=useState('red');
  return (
    <div>
        <h2>my like color is {color}</h2>
        <button type='button' onClick={()=>setColor("green")}>click to change</button>

    </div>
  )
}

export default Color;