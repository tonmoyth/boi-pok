import React from 'react';
import { Link } from 'react-router';

const Navber = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto mt-4'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to='/'><li>Home</li></Link>
                        
                        <Link to='/about'><li>About</li></Link>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                    <Link to='/'><li>Home</li></Link>
                        
                    <Link to='/about'><li>About</li></Link>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <button className='btn bg-[#23BE0A]'>Sign In</button>
                    <button className='btn bg-[#59C6D2]'>Sign Up</button>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;