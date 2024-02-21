import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../../../asset/firebase';


const Signup = () => {
    
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [userName,setUserName] =useState('')



    const HandleSubmit=()=>{
        createUserWithEmailAndPassword(auth,email,password).then
        (signInWithEmailAndPassword(auth,email,password)).then
        (updateProfile(auth.currentUser,{displayName:userName}
            )).catch((err)=>{
              alert(err)
            })
    }



  return (
    <div>
      <div>
        <input type='email' placeholder='Enter you Email' value={email}onChange={e=> setEmail(e.target.value)} />
        <input type='text' placeholder='Username'value={userName} onChange={e=> setUserName(e.target.value)} />
        <input type='password' placeholder='Enter your password'value={password} onChange={e=> setPassword(e.target.value)}/>
        <button onClick={HandleSubmit}>Signup</button>
      </div>
    </div>
  )
}

export default Signup
