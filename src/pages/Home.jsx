import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Footer from '../components/Footer'
function Home() {
    return (
        <>
            <Navbar />
            <div className='px-[5rem]'>
                <Herosection rtCount="7.90" />
                <Footer />
            </div>

        </>
    )
}

export default Home
