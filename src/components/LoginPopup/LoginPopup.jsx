import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

  const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {/* when Sign Up then only it shows all fields and for login it shows only email and password */}
          {currState==="Login"?<></>: <input type="text" placeholder='your name' required />}    
          <input type="email" placeholder='your email' required />
          <input type="password" placeholder='password' required />
        </div>
        <div className='login-popup-condition'>
          <input type="checkbox" required/>
          <p>By continuiong, i agree to T&C</p>
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {currState==="Login" ?
        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> 
        : <p>Already have a account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup