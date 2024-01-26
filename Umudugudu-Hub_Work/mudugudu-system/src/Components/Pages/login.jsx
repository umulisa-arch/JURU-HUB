import React from 'react'
import './Login.css';
import { Link } from "react-router-dom";

function  Login ()  {
  const handlerLogin = () =>{
    let url = "http://localhost:5173/";
    window.location.href = url;

    // to be done when role is user
    // let url2 = "http://localhost:5176/";
    // window.location.href = url2;
  }

  return (
    <div className="mainlogin">
       {/* <div className="newimage">
       
      <h1 className='welcome'>Welcome to Umudugudu-Hub Login Page</h1>
      <p className='p1'>
        Please log into the system in order to continue with us
      </p>
      
    </div> */}
    <div className='container'>
    <form action="#" method='GET' >
    <div className="header">
        <div className="text">Login </div>
        <div className="underline"></div>
    </div>
    <div className='username'><label htmlFor="username">Username</label></div>
    <div className="inputs">
      
        <div className="input">
            
            <input type="text" name="username" id="" placeholder='Username...' required/>

     </div> <br />
     <div className='password'><label htmlFor="password">Password</label></div>
     
     <div className="input">
        
        <input type="password" name="password" id=""  placeholder='Password...' required/>

     </div>
    </div>
    <div className="submit-container">
      <div>
        
        <button type='submit' className='btn' onClick={handlerLogin}>Login</button>
        
        

    </div>
    </div>
    <div className="forgot-password">Forget your password? <Link to="/reset-email"><span>Click here</span></Link></div>
    <div className="dont-have-account">Don't have account? <a href="signup"><span>Click here to Sign Up</span></a></div>
    
    </form>
    </div>
   
    </div>
  )
}
export default Login