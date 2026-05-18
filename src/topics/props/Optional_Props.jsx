import React from 'react'

const Optional_Props = ({username}) => {
    console.log(Boolean(""))
  return (
    <div>
        <h1>{username || "MY LOVE"}</h1>
    </div>
  )
}

export default Optional_Props