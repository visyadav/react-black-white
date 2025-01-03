import React, { useState } from 'react';
import Marquee from './Marquee';
import { SlArrowDown } from "react-icons/sl";
import { HiMagnifyingGlass } from "react-icons/hi2";
import NotificationCount from './NotificationCount';

function Navbar() {
    const [count, setCount] = useState(5);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Marquee />
            <nav className='flex flex-col md:flex-row px-4 md:px-[5rem] justify-between items-center font-semibold mt-5'>
                {/* Logo and Menu Toggle */}
                <div className='flex justify-between items-center w-full md:w-auto'>
                    <a href="/">
                        <h1 className='text-4xl font-extrabold'>J.</h1>
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden flex flex-col items-center justify-center'
                    >
                        <div className='w-6 h-1 bg-black mb-1'></div>
                        <div className='w-6 h-1 bg-black mb-1'></div>
                        <div className='w-6 h-1 bg-black'></div>
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`${
                        isOpen ? 'flex' : 'hidden'
                    } flex-col md:flex md:flex-row md:items-center gap-5 mt-3 md:mt-0`}
                >
                    <a href="/" className='flex items-center gap-1'>Explore <SlArrowDown className='w-2 h-2' /></a>
                    <a href="/">Directory</a>
                    <a href="/">Academy</a>
                    <a href="/" className='flex items-center gap-1'>Conferences <NotificationCount number={count} /></a>
                    <a href="/">Market</a>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-[30rem] mt-3 md:mt-0">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <HiMagnifyingGlass className='w-5 h-5' />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by Inspiration"
                        className="border font-normal w-full h-[3rem] bg-zinc-200 rounded-lg pl-10 placeholder-gray-500 placeholder:pl-2"
                    />
                </div>

                {/* Authentication Links */}
                <div className='flex flex-col md:flex-row gap-2 mt-3 md:mt-0'>
                    <a href="/">Login</a>
                    <a href="/">Sign Up</a>
                </div>

                {/* Buttons */}
                <div className='flex flex-col md:flex-row gap-2 mt-3 md:mt-0'>
                    <button className='bg-zinc-900 text-white px-5 py-2 rounded-lg'>Be Pro</button>
                    <button className='text-black border border-zinc-900 px-6 py-2 rounded-lg'>Subscribe</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
