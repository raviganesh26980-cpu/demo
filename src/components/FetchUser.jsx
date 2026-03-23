import React, { useEffect, useState } from 'react'

function FetchUser() {

    const[user,setUser]=useState([
        {id:0,name:'',username:'',email:''}
    ]);

    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');

    const URLApi="https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        fetch(URLApi)
        .then(response=>response.json())
        .then(data=>{
            setUser(data)
            console.log(data)
        })
        .catch(error=>console.log(error))
    },[])

    const addUser=(e)=>{
        e.preventDefault();
        fetch(URLApi,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({id,name,username,email})
        })
        .then(response=>response.json())
        .then(data=>{
            setUser([...user,data]);
            setId('');
            setName('');
            setUsername('');
            setEmail('');
            alert('data saved..!');
        });
    }
  return (
    <div>
        <h2>Fetch User</h2>
        <form onSubmit={addUser}>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)} placeholder='enter id' />
            <input type='text'value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
            <input type='text'value={username} onChange={(e)=>setUsername(e.target.value)}placeholder='enter the user'/>
            <input type='text'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>

            <button>click</button>
         

        </form>
        {
           user.map((user,index)=>(
            <p key={user.id}>{user.id}{user.name}{user.username}{user.email}</p>
           ))
        }
    </div>
  )
}

export default FetchUser;