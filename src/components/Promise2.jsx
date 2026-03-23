import React, { useState } from 'react'

function Promise2() {
    const[result,setResult]=useState('');
    const[error,setError]=useState('');

    const callpromise=function(){
        const mypromise=new Promise((resolve,reject)=>{
            let flag=1;
            if(flag==1){
                resolve("success daa");
            }else{
                reject("failed buddy");
            }
        });
        mypromise
        .then(result=>setResult(result))
        .catch(error=>setError(error))
        .finally(()=>console.log("thank you"));
    };
  return (
    <div>
        <h2>Promise Program</h2>
        <h3>{result}{error}</h3>
        <button type='button' onClick={()=>callpromise}>click to promise</button>

    </div>
  )
}

export default Promise2;