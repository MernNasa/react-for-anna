import React from 'react'

const Rules_of_jsx = () => {
    //! rules of jsx 
       let x="sundari"
       let y

       for(let i=1;i<=10;i++){
        console.log(i)
       }
  return (
    <div>
        <h1>hello {x}</h1>
        {
           x==="sundari"?<h1>I love sundari</h1>: <h1>I love mala</h1>
        }

        <h2>{y}</h2>
    </div>
  )
}

export default Rules_of_jsx