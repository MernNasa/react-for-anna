import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Lifing_Up_State = () => {
     const [username,setUserName]=useState("sundari")
    console.log("top parent")
  return (
    <div>
        <Child1 username={username}/>
        <Child2 setUserName={setUserName} username={username}/>
        <button onClick={()=>setUserName("Sheela")}>update from Top parent</button>
    </div>
  )
}

export default Lifing_Up_State