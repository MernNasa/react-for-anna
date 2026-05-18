import React from 'react'

const Conditional_Rendering = () => {
    const replay=false
    const per=85
  return (
    <div>

        <h1>Hello sundari</h1>
        {
          replay ? <h1>I love you </h1>: <h1>I hate you</h1>
        }

       
       <div>
        {
            per>90 ? <h1>You are bright student</h1>: per>80 && per<90 ?<h1>You are Good</h1>:<h1>You are fail</h1>
        }
       </div>
    </div>
  )
}

export default Conditional_Rendering