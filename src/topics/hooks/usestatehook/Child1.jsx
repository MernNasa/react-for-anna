import React, { useState } from 'react'

const Child1 = ({username}) => {
    console.log("Child 1")
  return (
    <div>
        <h1>Child1 Name is : {username}</h1>
    </div>
  )
}

export default Child1