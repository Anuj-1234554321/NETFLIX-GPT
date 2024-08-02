import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_LOGO } from "../Utils/constant";

const Login = ()=>{

    const[isSignForm,setIsSignForm] = useState(true);


   const toggleInForm=()=>{
        setIsSignForm(!isSignForm);
        
    };
    return (
       <div >

        <div className="absolute ">
        <Header/>
        <img className=" " src = {NETFLIX_BG_LOGO} alt = ' bg-logo' />
        </div >
          <form className="w-3/12 absolute bg-black  bg-opacity-70 my-36 mx-auto right-0 left-0 py-20  bottom-50">
            <h1 className="text-white px-10 text-2xl py-3 ">{isSignForm ? "Sign In":"Sign Up"}</h1>
 
           { isSignForm  &&

             <input type="text" placeholder="Full Name" className=" ml-10 py-2 p-10 w-2/3  bg-white" />
           }
            <br/> 
          <input type="email" placeholder="Email or mobile number   "  className=" p-10 m-10 h-5 py-5 w-15 bg-white"/>
          <br/>
          <input type="password" placeholder="Password" className="p-10 m-10 mt-1 h-5 py-5 w-15 bg-white" />
          <br/>
          <button className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 w-60  mx-10 rounded-sm" >Sign In</button>
          <p className="text-white p-10  cursor-pointer" onClick={toggleInForm}>{ isSignForm ? "New To Netflix ? Sign Up Now" : "Already Sign Up ? Sign In Now."}</p>
         </form> 


       </div>

      
    )

}

export default Login;