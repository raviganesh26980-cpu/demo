import React, { useState } from 'react'

function Contacts() {
    const[contact,setContact]=useState([
        {sname:'ravi',phone:9973546782}
    ]);

    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');

    const Addrecords=(e)=>{
        e.preventDefault();
        const addsn=name;
        const addph=phone;

        const newAdd={
            sname:addsn,
            phone:addph
        }
        setContact([...contact,newAdd]);
        setName('');
        setPhone('');
    }
  return (
    <div>
        <h2>Phone Number Storage</h2>
        <form method='post' onSubmit={Addrecords}>
            <label>contact name:</label><input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
            <label>phone number:</label><input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='enter phone' />

            

        </form>
        <h3>Contact Details</h3>
        <p>{"#"}{"id"}{"contact name"}{"Phone Number"}</p>

         {
        contact.map(item=>(
            <table>
                <tr>
                    <td key={item.sname}></td>
                    <td key={item.phone}></td>
                </tr>
            </table>
        ))
    }

    </div>
   
  )
}

export default Contacts;