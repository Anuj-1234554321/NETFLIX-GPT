import React from "react";
import { NETFLIX_LOGO } from "../Utils/constant";
 const Header = ()=>{
    return (
        <div className="absolute bg-gradient-to-b from-black">
        <img  className="  ml-20 w-44" src = {NETFLIX_LOGO} alt = 'netflix-logo' />
        </div>
    )
 }

 export default Header;