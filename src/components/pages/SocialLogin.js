import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { Link, useNavigate } from "react-router-dom";

const SocialLogin = ({ children }) => {

    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/my-board";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();

    const handleSignUp = async () => {
        await signInWithGoogle();
    };

    let signInError;
    if (error) {
        signInError = (
            <p className="text-red-500">
                <small>{error?.message}</small>
            </p>
        );
    }
    if (user) {
        navigate('/dashboard')
    }
    return (
        <>
            <button
                onClick={handleSignUp}
                className="btn btn-primary  my-2 focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
                <img style={{ width: "25px" }} src="https://i.ibb.co/xXCkjSm/Google-G-Logo-svg.png" alt="" />
                {children} Google
            </button>
            {signInError}
        </>
    );
};

export default SocialLogin;