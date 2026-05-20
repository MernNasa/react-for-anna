import React, { useRef } from 'react'

const UseRefHook = () => {
    const usernameRef=useRef()
    console.log(usernameRef)

    const updateName=()=>{
        usernameRef.current.innerText="Mala"
    }
    console.log("hello")
  return (
    <div>

        <h1>UseRefHook</h1>
        <h2 ref={usernameRef}>Sundari</h2>

        <button onClick={updateName}> Update Name</button>
    </div>
  )
}

export default UseRefHook