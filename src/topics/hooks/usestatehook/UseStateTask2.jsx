import React, { useState } from 'react'

const UseStateTask2 = () => {
    const [user,setUser]=useState({
        username:"Sundari",
        age:23,
        gender:"female",
        height:5.3,
        mobile:9988776655,
        imgurl:"https://cdn.pixabay.com/photo/2018/01/03/19/17/cat-3059075_1280.jpg",
    })
   
    const updateName=()=>{
        const name=prompt("Enter your Name: ")
        setUser({...user,username:name})
    }
    console.log(user)
  return (
    <div >
        <div className='card'>
            <div className="img">
                <img src={user.imgurl} alt="" />
            </div>
            <div className="textbox">
                <h1>Name :{user.username}</h1>
                <h4>Age :{user.age}</h4>
                <p>Gender : {user.gender} 
                    <button onClick={updateName}>Update Name</button>
                </p>
            </div>
    </div>
    </div>
  )
}

export default UseStateTask2