import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";


export default function UserComponent({user,setUser}){
   

    //functionality
    const history = useHistory();
    const deleteUser=(idx)=>{
     const alterList =user.filter((per,id)=>per.id!==idx)
     setUser(alterList)
    
    }
    return(
        <BaseApp
        
        title ="Student Details"
        styles="title">
      <div className="user-content">

        {user.map((person,idx)=>(
            <div key={idx} className="user-card">
                <h1>{person.name}</h1>
                <p>Batch:{person.batch}</p>
                <p>Email:{person.email}</p>
                <p>Exp:{person.experience}</p>
                <div className="btn-group">
                    <button
                    onClick={()=>history.push(`/edit/${person.id}`)}
                    className="btn-one">Edit</button>
                    <button 
                    onClick={()=>history.push(`/user/${idx}`)}
                    className="view-btn">View</button>
                    <button className="btn"
                    onClick={()=>deleteUser(person.id)}
                    >Delete</button>
                </div>
            </div>
            
        ))}
      </div>
        
        </BaseApp>
    )
}