import React, { useState } from 'react'

const GrandChild = ({setUserName}) => {
    const[count,setCount]=useState(0)
    console.log("grand child")
  return (
    <div>
        <h1>GrandChild {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <hr />
        <button onClick={()=>setUserName("shakila")}>Update from grand child</button>
    </div>
  )
}

export default GrandChild