import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [initials, setInitial] = useState("");
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }
    useEffect(() => {
        if (user) {
            const x = user?.displayName;
            setInitial(
                x?.charAt(0)?.toUpperCase()
            );
        }
    }, [user, user?.displayName]);
    // console.log(initials)
    return (
        <div class="navbar bg-base-200 px-2 lg:px-16 sticky top-0 z-20">
            <div class="navbar-start">
                <div class="dropdown">
                    {
                        pathname.includes('dashboard') &&
                        <label tabindex="0" class="btn btn-ghost lg:hidden " for="my-drawer-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    }

                    {/* <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </label> */}
                    {/* <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                </div>
                <p class="font-bold normal-case text-xl">ShortGun</p>
            </div>
            {/* <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/dashboard'>Dashboard</Link></li>

                </ul>
            </div> */}


            {
                user ?
                    <div class="navbar-end">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 bg-black rounded-full flex justify-center ">
                                    {/* <img src="https://placeimg.com/80/80/people" /> */}
                                    <h1 className='text-white mt-1 text-2xl font-bold'>{initials}</h1>
                                </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={handleSignOut}>Logout</a></li>
                            </ul>
                        </div>
                    </div> :
                    <div className='navbar-end'>
                        <ul class="menu menu-horizontal p-0">
                            <li><Link to='/login'>login</Link></li>
                        </ul>
                    </div>
            }
        </div>


    );
};

export default Navbar;