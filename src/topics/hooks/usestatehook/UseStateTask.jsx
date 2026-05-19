import React, { useState } from 'react'

const UseStateTask = () => {
    const[username,setUsername]=useState("sundari")

    const updateName=()=>{
        const user=prompt("Enter your name: ")
        setUsername(user)
    }
  return (
    <div>
        <h1>Hello {username}</h1>
        <button onClick={updateName}>Click</button>
    </div>
  )
}

export default UseStateTask