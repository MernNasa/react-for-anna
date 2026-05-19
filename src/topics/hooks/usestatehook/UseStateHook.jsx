import React, { useState } from 'react'

const UseStateHook = () => {
    let [count,setCount]=useState(0)

    const updateCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={updateCount}>Update</button>
    </div>
  )
}

export default UseStateHook



