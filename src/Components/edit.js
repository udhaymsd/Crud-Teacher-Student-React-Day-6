import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../core/Base";

export default function EditUser({user,setUser}){
    const history = useHistory()
    const[name,setName] = useState("");
    const[idx,setIdx] = useState("");
    const[email,setEmail] = useState("");
    const[experience,setExperience] = useState("");
    const[batch,setBatch] = useState("");
    //const [clr,setClr]= useState("");

    const {id} = useParams();
    console.log(id);
    const selectedUser= user.find((per)=>per.id === id);
    console.log(selectedUser);

    useEffect(()=>{
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setEmail(selectedUser.email)
        setExperience(selectedUser.experience)
        setBatch(selectedUser.batch)
    },[])

    const updateUser = ()=>{
        //collecting new data
        const editIndex =user.findIndex((per)=>per.id === id);
        console.log(editIndex);
        //changed data in the input field
       const editedData = {
        id:idx,
        name,
        email,
        experience,
        batch
       }
       console.log(editedData)
     user[editIndex] = editedData;
     setUser([...user])
     console.log(user)
     history.push("/")
     

    }

    return(
        <BaseApp
        title="Add A New User"
        styles="title">
     <div className="input-value">

            <input
             placeholder="id"
             value={id}
             type="text"
             onChange={(event)=>setIdx(event.target.value)}/>
            <input 
            value={name}
            placeholder="name "
            type="text"
            onChange={(event)=>setName(event.target.value)}/>
            <input 
            value={email}
            placeholder="email"
            type="text"
            onChange={(event)=>setEmail(event.target.value)}/>
            
           
            <input 
            value={experience}
            placeholder="experience"
            type="number"
            onChange={(event)=>setExperience(event.target.value)}/>
            <input 
            value={batch}
            placeholder="batch"
            type="text"
            onChange={(event)=>setBatch(event.target.value)}/>

            <button
            onClick={updateUser}
            >Edit</button>


    
     </div>
     </BaseApp>
    )
}