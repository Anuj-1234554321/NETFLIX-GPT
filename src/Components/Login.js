import React, { useState, useRef } from "react";
import Header from "./Header";
import { NETFLIX_BG_LOGO } from "../Utils/constant";
import { checkValidateData } from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const handleButtonClick = async () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        try {
            if (isSignForm) {
                const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                await updateProfile(user, {
                    displayName: fullName.current.value,
                    photoURL: "https://image.shutterstock.com/image-vector/user-approved-icon-260nw-1038327685.jpg"
                });
                navigate('/browse');
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                navigate('/browse');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const toggleInForm = () => {
        setIsSignForm(!isSignForm);
    };

    return (
        <div>
            <div className="absolute w-full h-full">
                <Header />
                <img className="w-full h-full object-cover" src={NETFLIX_BG_LOGO} alt="bg-logo" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-3/12 absolute bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 py-20"
            >
                <h1 className="text-white px-10 text-2xl py-3">
                    {isSignForm ? "Sign Up" : "Sign In"}
                </h1>

                {isSignForm && (
                    <input
                        ref={fullName}
                        type="text"
                        placeholder="Full Name"
                        className="ml-10 py-2 px-10 w-2/3 bg-white"
                    />
                )}
                <br />
                <input
                    ref={email}
                    type="email"
                    placeholder="Email or mobile number"
                    className="px-10 ml-10 my-4 py-2 w-2/3 bg-white"
                />
                <br />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="px-10 ml-10 my-4 py-2 w-2/3 bg-white"
                />
                <br />
                {errorMessage && <p className="px-10 py-2 text-red-500">{errorMessage}</p>}
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 mx-10 rounded-sm"
                    onClick={handleButtonClick}
                >
                    {isSignForm ? "Sign Up" : "Sign In"}
                </button>
                <p className="text-white p-10 cursor-pointer" onClick={toggleInForm}>
                    {isSignForm ? "New to Netflix? Sign Up Now" : "Already signed up? Sign In Now."}
                </p>
            </form>
        </div>
    );
};

export default Login;
