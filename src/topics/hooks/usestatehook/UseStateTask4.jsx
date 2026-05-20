import React, { useState } from 'react'

const UseStateTask4 = () => {
    const [boxstatus,setBoxstatus]=useState(false)

   
   
  return (
    <div>
        <button onClick={()=>setBoxstatus(!boxstatus)}>
            {
                boxstatus?"close":"open"
            }
        </button>
        {
            boxstatus? <div className="box"></div>:""
        }
    </div>
  )
}

export default UseStateTask4