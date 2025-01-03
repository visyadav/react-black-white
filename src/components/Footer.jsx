import React from 'react';

function Footer() {
    return (
        <footer className=" text-black py-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo or Brand Name */}
                    <div className="text-lg font-bold">
                        J. Portfolio
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/about" className="hover:underline">About</a>
                        <a href="/projects" className="hover:underline">Projects</a>
                        <a href="/contact" className="hover:underline">Contact</a>
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
