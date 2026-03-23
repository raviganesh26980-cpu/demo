import React, { useState } from 'react'

function Useincredecre() {
    const[incre,setIncre]=useState(0);
    let increment=()=>{
        setIncre(incre+1);
    }
    let decrement=()=>{
        setIncre(incre-1);
    }
  return{incre ,increment ,decrement};
}

export default Useincredecre;