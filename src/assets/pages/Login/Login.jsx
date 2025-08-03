import React, { useState } from 'react'
import './Login.css'
import logo from '../../cards/cards2/logo.png'
import { login, signup } from '../../../firebase'

const Login = () => {

  const[signState, setSignState] = useState("Sign In");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const user_auth = async(event)=>{
    event.preventDefault();
    if (signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
  }
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Your Name' />:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter Email"/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password"/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=" ">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p>New To Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up</span ></p>:<p>Already Have a Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>
        }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
