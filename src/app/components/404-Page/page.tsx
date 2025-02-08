import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Footer from '../Footer/page'
import Navbar from '../Navbar/page'



function Page404() {
    return (
        <div>
            <div>
                <Navbar />
                <div className="relative flex items-center justify-center h-[300px]">
                    <Image
                        src="/Hackathon/menu-image.png"
                        alt="Background for Our Menu"
                        layout="fill"
                        objectFit="cover"
                        className="-z-10"
                    />
                    <div className="text-center text-white z-10">
                        <h1 className="text-3xl font-bold">404 Error</h1>
                        <p className="text-sm mt-2">
                            <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'> 404</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-6xl font-bold text-orange-500">404</h1>
                <h2 className="text-xl font-semibold mt-4">Oops! Looks like something went wrong</h2>
                <p className="text-gray-600 mt-2">
                    Page cannot be found! We'll have it figured out in no time.
                </p>
                <p className="text-gray-600">Meanwhile, check out these fresh ideas:</p>
                <Link
                    href="/"
                    className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
                >
                    Go to home
                </Link>
            </div>

            <Footer />
        </div>
    )
}

export default Page404