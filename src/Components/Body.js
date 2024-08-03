import React,{useEffect} from "react";
import Login from "./Login";
import Browse from "./Browse";
import  { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import { addUser,removeUser } from "../Utils/userSlice";
const Body = ()=>{
    const dispatch = useDispatch();

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    },
])

useEffect(()=>{
   // it`s  called when  user do signIn SignUp
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch( addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    
         
        } else {
          dispatch(removeUser());// for logout
         
        }
      });
      

},[])

    return (
        <div>
          <RouterProvider router = {appRouter}/>
        </div>
    )
}
export default Body;