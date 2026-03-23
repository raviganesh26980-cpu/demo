import React, { useEffect, useState } from 'react'

function Fetchapi() {
    const[user,setUser]=useState([
        {id:0,name:"",username:"",email:''}
    ]);

    const URLApi="https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        fetch(URLApi)
        .then(response=>response.json())
        .then(data=>{
            setUser(data)
            console.log(data)
        })
        .catch((error)=>console.log(error))
    
    },[]);
  return (
    <div>
        <h2>Fetch User</h2>
        {
            user.map((user,index)=>
            <p key={user.id}>{user.id}{user.name}{user.username}{user.email}</p>)
        }
    </div>
  )
}

export default Fetchapi;