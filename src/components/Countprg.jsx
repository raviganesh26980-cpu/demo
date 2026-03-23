import React from 'react'
import Useincredecre from './Useincredecre';

function Countprg() {
    const{incre,increment,decrement}=Useincredecre(0);
  return (
    <div>
        <h2>count</h2>
        <h3>{incre}</h3>
        <button onClick={increment}>++</button>
        <button onClick={decrement}>--</button>
    </div>
  )
}

export default Countprg;