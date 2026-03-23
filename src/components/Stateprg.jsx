import React, { useState } from 'react'

function Stateprg() {
    const[students,setStudents]=useState([
        {rno:1,sname:'shiva',age:22},
        {rno:2,sname:'shree',age:34},
        {rno:3,sname:'kumar',age:55},
    ]);

    const[rno,setRno]=useState('');
    const[sname,setSname]=useState('');
    const[age,setAge]=useState('');

    

    const AddRecords=(e)=>{
        e.preventDefault();
        const addrno=rno;
        const addsname=sname;
        const addage=age;

        if(addrno && addsname && addage){
            const newAdd={
                rno:addrno,
                sname:addsname,
                age:addage
            }
             setStudents([...students,newAdd])
                setRno('');
                setSname('');
                setAge('');
        }
        else{
            alert('fill the all field');
        }
        
    }
  return (
    <div>
        <form onSubmit={AddRecords}>
            <input type='text' value={rno} onChange={(e)=>setRno(e.target.value)} placeholder='roll no' />
            <input type='text' value={sname} onChange={(e)=>setSname(e.target.value)} placeholder='name'/>
            <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='age'/>

            <button type='submit'>Add record</button>

        </form>
        <ul>
            {students.map(item=>(
                <li key={item.rno}>{item.rno}{item.sname}{item.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default Stateprg;