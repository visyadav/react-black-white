import React, { useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import Portfolios from './Portfolios';
function Herosection(props) {
    const [rating, setRating] = useState("SOTD");
    const [ratingCount, setRatingCount] = useState(props.rtCount);
    const todayDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' }; // Format options
    const formattedDate = todayDate.toLocaleDateString('en-US', options);
    return (
        <>
            <div className='p-4 md:p-8'>
                <div className='mt-10 flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='border border-zinc-900 w-16 h-20 rounded-xl flex flex-col items-center justify-center'>
                            <h1>{rating}</h1>
                            <hr className=' border-black mt-1' />
                            <h1 className='font-bold text-2xl'>7.63</h1>
                            <h5 className='text-xs'>/10</h5>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 mt-4 md:mt-0'>
                        <CiBookmark className='w-8 h-8' />
                        <CiShare2 className='w-8 h-8' />
                        <GoShare className='w-8 h-8' />
                    </div>
                </div>
                <div className='grid place-items-center mt-10'>
                    <p>Site of the Day - {formattedDate}</p>
                    <h1 className='text-5xl md:text-9xl font-bold'>PORTFOLIO</h1>
                    <div className='flex flex-col md:flex-row justify-between gap-5 mt-7 cursor-pointer'>
                        <div className="flex justify-center items-center">
                            <button className="px-2 py-1 bg-zinc-900 text-white rounded-full text-xl">T/F</button>
                            <p className="ml-2 text-2xl font-semibold relative group">
                                ToyFlight
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gray-300"></span>
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </p>
                            <p className='text-xs mt-1 ml-2'>PRO</p>
                        </div>

                        <div className="flex justify-center items-center">
                            <button className="px-2 py-1 bg-zinc-900 text-white rounded-full text-xl">MJ</button>
                            <p className="ml-2 text-2xl font-semibold relative group">
                                MJ.
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gray-300"></span>
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolios />
        </>
    )
}

export default Herosection
