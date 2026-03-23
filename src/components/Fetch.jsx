import React, { useEffect, useState } from 'react'

function Fetch() {
    const[users,setUsers]=useState([
        {id:0,name:'ravi',username:'',email:''}
    ]);

    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[editindex,setEditindex]=useState(null);

    const URLApi="https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        fetch(URLApi)
        .then(response=>response.json())
        .then(data=>{
            setUsers(data)
            console.log(data)
        })
        .catch(error=>console.log(error))

    },[]);

    //add
    const addUser=(e)=>{
        e.preventDefault();
        fetch(URLApi,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id,name,username,email})
        })
        .then(response=>response.json())
        .then((data)=>{
            setUsers([...users,{id:data.id,name,username,email}])
            setId('')
            setName('')
            setUsername('')
            setEmail('')
            
        })
        .catch(error=>console.log(error));
    }
    const editUser = (index) => {
          setId(users[index].id);
          setName(users[index].name);
          setUsername(users[index].username);
          setEmail(users[index].email);
          setEditindex(index);
};

    //Update User
    const updateUser = () => {
    fetch(`${URLApi}/${users[editindex].id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({id,name,username,email })
    })
    .then(response => response.json())
    .then(() => {
    const changeUser=[...users];
    changeUser[editindex]={id,name,username,email};
    setUsers(changeUser);
    setId('');
    setName('');
    setUsername('');
    setEmail("");
    setEditindex(null);
    })
    .catch(error=>console.log(error));
  };
  //delete
  const deleteUser = (userId) => {
    fetch(`${URLApi}/${userId}`, {
        method: "DELETE"
    })
    .then(() => {
        setUsers(users.filter(user => user.id !== userId));
    })
    .catch(error => console.log(error));
};



  return (
    <div>
              <h2>Fetch Users</h2> <br />
        <form onSubmit={addUser}>
        <label>User Id</label><input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
        <label>Name</label><input type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
        <label>User Name</label><input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <label>User Email</label><input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br /><br />
        <button>Add User</button>
        <button type="button" onClick={updateUser}>Update User</button>
        <button type='button'>Delete User</button>
        <br /><br />
        </form>
        {users.map((user,index)=>
        <p key={user.id}>{user.id} {user.name} {user.username} {user.email}
        <button onClick={() => editUser(index)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
        </p>
        )} 

    </div>
  )
}

export default Fetch;