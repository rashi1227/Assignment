import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import logo from '../assets/logo.png';
import AnimatedButton from './AnimatedButton';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const togggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='w-full border-b-2'>
            <nav className='py-4 md:px-8 px-4 bg-sky-50 shadow-lg'>
                <div className='flex items-center justify-between'>
                    <div className='font-bold text-2xl cursor-pointer text-black'>
                        <a href="/">
                            <img src={logo} alt="Logo" className='h-14 w-36' />
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <div className='lg:flex items-center gap-3 hidden text-blue-900'>
                            <div className=''>
                                <div className='relative'>
                                    <AnimatedButton text="Upcoming Live Class" />
                                    <div className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-blue-300 animate-ping"></div>
                                    <div className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-blue-300"></div>
                                </div>
                            </div>
                            <AnimatedButton text="Certificates" />
                            <AnimatedButton text="Placements" />
                        </div>
                        <div className='lg:flex hidden items-center ml-4'>
                            <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
                                <Link to="/profile">
                                    <span className='text-xl font-bold'>R</span>
                                </Link>
                            </div>
                        </div>
                        <button onClick={togggleMenu} className='lg:hidden text-indigo-600 text-3xl ml-4'>
                            <HiMenu />
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className='mt-4 bg-indigo-500 text-white rounded py-4'>
                        <AnimatedButton text="Upcoming Live Class" />
                        <AnimatedButton text="Certificates" />
                        <AnimatedButton text="Placements" />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
