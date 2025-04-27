"use client"
import { useState } from "react"

export default function dashboard(){
    const [name,setName] = useState("");
    console.log("Dardboard")
    return <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        Hello! {name}
    </div>
}