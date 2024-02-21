import React, { useState } from 'react'
import Signup from './log/REGISTER/Signup'
import Log from './log/LOGIN/Log'

const Authentication = () => {
    const [active,setActive]=useState('login')


    const HandleChange=()=>{
        setActive(active ===  'login'? 'signup' : 'login')
    }
  return (
    <>
    <div>
{
    active === 'login'?(<Log/>) : (<Signup/>)
}
     

    </div>
    <div>
        {
            active === 'login' ? (<>dont have an Account <button onClick={HandleChange}>Signup</button></>):
            (<>have an Account <button onClick={HandleChange}>Login</button></>)
        }
        
    </div>
    </>
  )
}

export default Authentication
