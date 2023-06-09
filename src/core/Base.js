import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title,styles,children}){
    const history = useHistory();
    return(
        <div>
            <div className="nav">
                <span>
                    <button
                    onClick={()=>history.push("/add/user")}
                    >Add Student</button>
                </span>
                <span>
                    <button
                    onClick={()=>history.push("/add/teacher")}
                    >Add Teacher</button>
                </span>
                <span>
                    <button
                    onClick={()=>history.push("/")}
                    >Dashboard-Student</button>
                </span>
                <span>
                    <button
                    onClick={()=>history.push("/teacher/details")}
                    >Dashboard-Teacher</button>
                </span>
            
            </div>
           <div className={styles}>{title}</div>
           <div className="children">{children}
           </div>
           </div>
        
    )
}