import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
function Footer() {
    return (
        <footer className=" text-black py-8">
            <div className='w-full bg-zinc-900 h-[.1rem] mb-5'>

            </div>
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo or Brand Name */}
                    <div className="text-lg font-bold">
                        J. Portfolio
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 text-2xl">
                        <a href="/" className="hover:underline hover:opacity-50 transition-all ease-linear duration-200"><CiInstagram /></a>
                        <a href="/about" className="hover:underline hover:opacity-50 transition-all ease-linear duration-200"><CiTwitter /></a>
                        <a href="/projects" className="hover:underline hover:opacity-50 transition-all ease-linear duration-200"><CiFacebook /></a>
                        <a href="/contact" className="hover:underline hover:opacity-50 transition-all ease-linear duration-200"><CiYoutube /></a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} J. Portfolio. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
