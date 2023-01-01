import React, { useState } from 'react'

function DigitalClock() {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    const updatedTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
       
    }
    setInterval(updatedTime, 1000)
   


  return (
   
    <div className='container'>
       <h1>---------------------------------------------------------------------------------</h1>
        <br></br>
        *********************************************************************************
         <h1>current time in NEPAL is {ctime} </h1>
        *********************************************************************************
        <br></br>
        <h1>---------------------------------------------------------------------------------</h1>
        {/* <button onClick={updatedTime}>Update</button> */}
        </div>
  )
}

export default DigitalClock
