import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
function Home() {
    return (
        <>
            <div className='w-full h-full bg-zinc-100'>
                <Navbar />
                <div className='px-[5rem]'>
                    <Herosection rtCount="7.90" />
                </div>
            </div>
        </>
    )
}

export default Home
