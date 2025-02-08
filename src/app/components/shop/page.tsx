// 'use client'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import Header from '../Header/page'
// import Slider from '../Slidebar/page'
// import Footer from '../Footer/page'
// import Navbar from '../Navbar/page'

// const Shop = () => {
//     const [sortBy, setSortBy] = useState("Newest");
//     const [show, setShow] = useState("Default");

//     const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setSortBy(e.target.value);
//     };

//     const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setShow(e.target.value);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="relative flex items-center justify-center h-[300px]">
//                 <Image
//                     src="/Hackathon/menu-image.png"
//                     alt="Background for Our Menu"
//                     layout="fill"
//                     objectFit="cover"
//                     className="-z-10"
//                 />
//                 <div className="text-center text-white z-10">
//                     <h1 className="text-3xl font-bold">Our Shop</h1>
//                     <p className="text-sm mt-2">
//                         <a href="/" className="hover:underline ">Home</a> › <span className='text-orange-500'>Shop</span>
//                     </p>
//                 </div>
//             </div>


//             <div className="flex justify-center items-center gap-4 mt-6">
//                 <div className="flex items-center">
//                     <label htmlFor="sortBy" className="mr-2 text-gray-600">
//                         Sort By:
//                     </label>
//                     <select
//                         id="sortBy"
//                         value={sortBy}
//                         onChange={handleSortChange}
//                         className="border border-gray-300 rounded px-3 py-1"
//                     >
//                         <option value="Newest">Newest</option>
//                         <option value="Oldest">Oldest</option>
//                         <option value="Popular">Most Popular</option>
//                     </select>
//                 </div>
//                 <div className="flex items-center">
//                     <label htmlFor="show" className="mr-2 text-gray-600">
//                         Show:
//                     </label>
//                     <select
//                         id="show"
//                         value={show}
//                         onChange={handleShowChange}
//                         className="border border-gray-300 rounded px-3 py-1"
//                     >
//                         <option value="Default">Default</option>
//                         <option value="10">10 Items</option>
//                         <option value="20">20 Items</option>
//                         <option value="50">50 Items</option>
//                     </select>
//                 </div>
//             </div>

//             <div className='flex justify-center mt-10 '>
//                 <div className=" grid grid-cols-1 gap-[16px]  md:grid-cols-3 lg ">
//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/lime.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/choco.png"
//                             alt="chocolate image"
//                             width={260}
//                             height={150}
//                             className="h-[280px] "
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/burger.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/Country Burger.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/drink.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/pizza.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/chesse.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/sandwhic.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/chiken.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/lime.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/Country Burger.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/drink.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/chesse.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/sandwhic.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>

//                     <div>
//                         <Image
//                             src="/Hackathon/Shop/chiken.png"
//                             alt="Background for Our Menu"
//                             width={260}
//                             height={150}
//                             className="h-[280px]"
//                         />
//                         <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//                         <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//                     </div>
//                     <button></button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Shop;