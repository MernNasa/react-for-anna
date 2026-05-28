import React, { useEffect, useState } from 'react'

  //! it is used to avoid side effects of react js
  //! it accepts 2 arguments 1--> callback function, 2--> one Dependency
  //! useEffect is a void function
  //! we can use useEffect in 3 ways
  //! 1. without dependency (for every re-render the will execute)
  //! 2. with Empty dependency (it executes only one time i.e is initial time only)
  //! 3. with dependency (it will executes every time if the dependency chanages)

const UseEffectHook = () => {
  const[count,setCount]=useState(0)
const[val,setval]=useState(10)

     //! 1. without dependency
    // useEffect(()=>{
    //         console.log("hello")
    //         console.log("hiii")
    // })
    //! 2. with Empty dependency
    // useEffect(()=>{
    //     console.log("hello")
    //     console.log("hiii")
    // },[])
    //! 3. with dependency
     useEffect(()=>{
        console.log("hello")
        console.log("hiii")
    },[count,val])

  return (
    <div>
        <h1>{count}</h1>
        <h2>{val}</h2>
        <button onClick={()=>setCount(count+1)}>Update count</button>
        <button onClick={()=>setval(val+10)}>update Val</button>
    </div>
  )
}

export default UseEffectHook