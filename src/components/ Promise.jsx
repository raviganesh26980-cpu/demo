import React from 'react'

function  Promiseprg() {
    const mypromise=new Promise((resolve,reject)=>{
        let flag=3;
        if(flag==1){
            resolve("success");
        }else{
            reject("failed");
        }
    });
    mypromise
    .then(result=>console.log(result))
    .catch((result)=>console.log(result))
    .finally(()=>console.log("thank you"));
  return (
    <div>
<h2>promise example</h2>
    </div>
  )
}

export default  Promiseprg;