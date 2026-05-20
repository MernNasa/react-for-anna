import React, { useState } from 'react'
import GrandChild from './GrandChild'

const Child2 = ({setUserName,username}) => {
   console.log("child 2")
  return (
    <div>
        <h2>Child 2 Name : {username}</h2>
        <button onClick={()=>setUserName("leela")}>Change Name</button>
        <GrandChild setUserName={setUserName}/>
    </div>
  )
}

export default Child2