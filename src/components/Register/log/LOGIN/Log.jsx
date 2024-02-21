import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../../../asset/firebase"


const Log = () => {
    
    const HandleSub=()=>{
        signInWithEmailAndPassword(auth,email,password)
    }
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState('')
  return (
    <div>
      <div>
        <input type='email' placeholder='Enter you Email'value={email} onChange={e=> setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)}/>
        <button type='submit' onClick={HandleSub}>Signup</button>
      </div>
    </div>
  )
}

export default Log
