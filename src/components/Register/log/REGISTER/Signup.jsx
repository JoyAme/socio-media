import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../../../asset/firebase';
import { SignWrap } from "./Sign";


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
    <>
    <SignWrap>
    <div>

    <div className="app-container">
      <h1>Linkedin Clone</h1>
      <form  className="form-container">
        <label>
          Email:
          <input type='email' placeholder='Enter you Email' value={email}onChange={e=> setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          userName:
          <input type='text' placeholder='Username'value={userName} onChange={e=> setUserName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type='password' placeholder='Enter your password'value={password} onChange={e=> setPassword(e.target.value)}/>
        </label>
        <br />
        <button onClick={HandleSubmit}>Signup</button>
      </form>
    </div>

    </div>

    </SignWrap>
    </>
  )
}

export default Signup
