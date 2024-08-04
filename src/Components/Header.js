import React from "react";
import { NETFLIX_LOGO } from "../Utils/constant";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

    const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                
            })
            .catch((error) => {
                // An error happened.
                navigate('/');
            });
    };
useEffect(()=>{            // it`s  called when  user do signIn SignUp
   const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch( addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    navigate("/browse")         
    } else {
    dispatch(removeUser());// for logout
    navigate('/')
                  
    }
});
return ()=>unsubscribe()
            
},[dispatch])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between"
>
          <img className="ml-20 w-44 my-2" src={NETFLIX_LOGO} alt="netflix-logo" />
            <div className="flex p-2 items-center">
                {user && (

                   
                    <img
                        alt="userIcon"
                        className="w-10 h-10 rounded-lg"
                        src={auth?.currentUser?.photoURL}   // Default user icon if photoURL is not available
                    
                    />

                )} 
                <button onClick={handleSignOut} className="mr-2 text-white border border-red-400 cursor-pointer">
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Header;
