import React from "react";
import { NETFLIX_LOGO } from "../Utils/constant";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector(store => store.user);
//    console.log(user.payload.photoURL);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate('/');
            })
            .catch((error) => {
                // An error happened.
                navigate('/');
            });
    };

    return (
        <div className="absolute bg-gradient-to-b from-black w-full flex justify-between items-center">
            <img className="ml-20 w-44" src={NETFLIX_LOGO} alt="netflix-logo" />
            <div className="flex p-2 items-center">
                {user && (
                    <img
                        alt="userIcon"
                        className="w-12 h-13"
                        src={user?.photoURL} // Default user icon if photoURL is not available
                    />
                )}
                <button onClick={handleSignOut} className="mr-2 text-white border border-red-400">
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Header;
