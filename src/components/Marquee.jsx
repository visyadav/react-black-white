import React from 'react'
import { motion } from 'framer-motion'
import { CiFaceSmile } from "react-icons/ci";
function Marquee() {
    const marqueeItem = 5;
    return (
        <>
            <div className='overflow-hidden relative w-screen h-[6vh] bg-zinc-200'>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: 'linear',
                    }} className=' absolute whitespace-nowrap'
                >
                    <div className='flex opacity-80 mt-2 gap-5'>
                        {Array.from({ length: marqueeItem }).map((item, index) => (
                            <p className=' items-center' key={index}>
                                <span className='font-bold mr-3'>New Season, New Skill! <CiFaceSmile className='inline-block w-6 h-6 pb-1' /></span>HAPPY NEW YEAR
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Marquee
