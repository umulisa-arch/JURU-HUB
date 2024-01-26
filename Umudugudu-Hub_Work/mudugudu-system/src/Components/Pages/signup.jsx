import React from 'react'
import { Link } from "react-router-dom";
import './login.css'


function  Signup  ()  {
  return (
    <>
    {/* Message to be displayed */}
    <div className='signup-success'>
      Account created succefully!!!
    </div>
    <br />
    <div className='signup-fail'>
      Account creation failed!!!
    </div>
    <div className="mainlogin">
        {/* <div className="newdiv">
      <h1 className='welcome'>Welcome to Umudugudu-Hub Sign Up  Page</h1>
      <p className='p1'>
        Please create account  to continue with the system
      </p>
      
    </div> */}
    
    <div className='container1'>
    <form action="#" method='GET'>
    <div className="header">
        <div className="text">Sign Up </div>
        <div className="underline"></div>
    </div>
    
    <div className='names'><label htmlFor="names">Names</label></div>
    <div className="inputs">
      
      
        <div className="input">
            
            <input type="text" name="names" id="" placeholder='Names...' required/>

     </div>
     <div className='user'><label htmlFor="username">Username</label></div>
     <div className="input">
            
            <input type="text" name="username" id="" placeholder='Username...' required/>

     </div>
     <div className='email'><label htmlFor="email">Email</label></div>
     <div className="input">
            
            <input type="email" name="email" id="" placeholder='Email...' required/>

     </div>
     <div className='password'><label htmlFor="password">Password</label></div>
     <div className="input">
            
            <input type="password" name="password" id="" placeholder='Password...' required/>

     </div>
     <div className='confirmpassword'><label htmlFor="confirmpassword">Confirm password</label></div>
     
     <div className="input">
        
        <input type="password" name="password" id=""  placeholder='Confirm password...' required/>

     </div>
     <div className="submit-container">
      <div>
       <Link to="/login"> <button type='submit' className='btn1'>SignUp</button></Link>

    </div>
    </div>
    </div>
    <div className="haveAccount">Already have an account? <a href="login"><span>Click here to login</span></a></div>
    
    </form>
    </div>
  
    </div>
    
   
    
    </>
  )
}
export default Signup
