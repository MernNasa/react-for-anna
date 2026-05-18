import React from 'react'

const Child = ({username,age,imageurl,video}) => {
    console.log(imageurl)
  return (
    <div className='card'>
            <div className="img">
                {
                     imageurl? <img src={imageurl} alt={username} />: <video playsInline autoPlay muted loop  src={video}></video>
                }
            </div>
            <div className="textbox">
                <h1>Name :{username}</h1>
                <h4>Age :{age}</h4>
            </div>
    </div>
  )
}

export default Child