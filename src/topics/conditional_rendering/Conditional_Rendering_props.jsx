import React from 'react'
import Child from './Child'

const Conditional_Rendering_props = () => {
    const obj=[
        {
        username:"sundari",
        age:23,
        imageurl:"https://cdn.pixabay.com/photo/2018/01/03/19/17/cat-3059075_1280.jpg",
        video:""
        },
        {
        username:"leela",
        age:23,
        imageurl:"",
        video:"https://cdn.pixabay.com/video/2026/02/23/336149_tiny.mp4"
        },
        {
        username:"mala",
        age:23,
        imageurl:"https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg",
        video:""
    }
    ]
  return (
    <div>
       {
        obj.map((ele,index)=>{
            return(
                <div key={index}>
                    <Child {...ele}/>
                </div>
            )
        })
       }
    </div>
  )
}

export default Conditional_Rendering_props