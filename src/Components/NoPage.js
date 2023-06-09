import React from "react"
import { useHistory } from "react-router-dom"

export function NoPage(){
    const history = useHistory()
    return(
        <div>
            <h1>Hi you entered wrong palce</h1>
            <button
            onClick={()=>history.push("/")}>
              Dashboard
            </button>
        </div>
    )
}