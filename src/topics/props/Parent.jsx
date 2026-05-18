import React from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child_3 from './Child_3'
import Optional_Props from './Optional_Props'
import Props_Alias from './Props_Alias'

const Parent = () => {
    const childnames=["sundari","sheela","leela","mala"]
    const user={
        username:"sundari",
        age:23,
        gender:"female"
    }
  return (
    <div>
        {
            childnames.map((ele,index)=>{
                return(
                    <div key={index}>
                        <Child name={ele}/>
                    </div>
                )
            })
        } 

        <Child2 data={{user:"sundari",age:23}}/>
        <Child_3 {...childnames}/>
        <Optional_Props username={[]}/>
        <Props_Alias user="sundari"/>
    </div>
  )
}

export default Parent