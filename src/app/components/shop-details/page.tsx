// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { useState } from "react";
// import { FaHeart, FaShareAlt } from "react-icons/fa";
// import Footer from '../Footer/page'
// import Navbar from '../Navbar/page';

// function ShopDetails() {
//   const [quantity, setQuantity] = useState(1);


//   return (
//     <div>
//       <Navbar />
//       <div className="relative flex items-center justify-center h-[300px]">
//         <Image
//           src="/Hackathon/menu-image.png"
//           alt="Background for Our Menu"
//           layout="fill"
//           objectFit="cover"
//           className="-z-10"
//         />
//         <div className="text-center text-white z-10">
//           <h1 className="text-3xl font-bold">Our Shop</h1>
//           <p className="text-sm mt-2">
//             <a href="/" className="hover:underline ">Home</a> › <span className='text-orange-500'>Shop details</span>
//           </p>
//         </div>
//       </div>

//       <div className='p-12'>
//         <div className="flex gap-16 p-8 pt-24 ">
//           <div className="flex gap-4 ">
//             <div className="flex flex-col gap-4 mt-16">
//               <Image src="/Hackathon/shop-details-images/yummy.png" alt="Thumbnail 1" width={300} height={300} className="rounded-md cursor-pointer" />
//               <Image src="/Hackathon/shop-details-images/yummy.png" alt="Thumbnail 2" width={300} height={300} className="rounded-md cursor-pointer" />
//               <Image src="/Hackathon/shop-details-images/yummy.png" alt="Thumbnail 3" width={300} height={300} className="rounded-md cursor-pointer" />
//               <Image src="/Hackathon/shop-details-images/yummy.png" alt="Thumbnail 4" width={300} height={300} className="rounded-md cursor-pointer" />
//             </div>

//             <Image src="/Hackathon/shop-details-images/yummy.png" alt="Main Product" width={500} height={400} className="rounded-lg h-[400px]" />
//           </div>

//           <div className="flex flex-col">
//             <span className="bg-yellow-400 text-white px-2 py-1 rounded-md w-fit">In Stock</span>
//             <h1 className="text-3xl font-bold mt-2">Yummy Chicken Chup</h1>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
//             </p>

//             <div className="text-xl font-semibold mt-4">54.00$</div>
//             <div className="flex items-center gap-2 mt-2 text-yellow-500">
//               ⭐⭐⭐☆☆ <span className="text-gray-500">(3.0 Rating | 22 Reviews)</span>
//             </div>

//             <div className="flex items-center gap-4 mt-4">
//               <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-3 py-1 border rounded">-</button>
//               <span>{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 border rounded">+</button>
//               <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Add to Cart</button>
//             </div>

//             <div className="flex gap-4 mt-4">
//               <button className="flex items-center gap-2 text-gray-600"><FaHeart /> Add to Wishlist</button>
//               <button className="flex items-center gap-2 text-gray-600">Compare</button>
//             </div>

//             <div className="text-gray-500 mt-4">
//               <p><strong>Category:</strong> Pizza</p>
//               <p><strong>Tag:</strong> Our Shop</p>
//             </div>

//             <div className="flex items-center gap-4 mt-4">
//               <FaShareAlt className="text-gray-600 text-xl cursor-pointer" />
//               <span className="text-gray-500">Share</span>
//             </div>
//           </div>
//         </div>

//       </div>


//       <div className=' p-[100px] '>
//         <div className='flex gap-6 py-6'>
//           <button type='submit' className='border text-[18px]  w-[165px] h-[50px] text-white bg-[#FF9F0D]'>Description</button>
//           <h4 className='pt-4'>Reviews (24)</h4>
//         </div>
//         <div>
//           <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
//           <br />
//           <br />
//           <p>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
//         </div>

//         <div className=''>
//           <h1 className='text-[22px] py-4'>Key Benefits</h1>
//           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </li>
//           <li>Maecenas ullamcorper est et massa mattis condimentum.
//           </li>
//           <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
//           <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
//           <li>Mauris eget diam magna, in blandit turpis.</li>
//         </div>
//       </div>

//       <div className='p-[20px] pb-[150px]'>
//         <h1 className='text-[22px] px-[100px] font-bold'>Similar Products</h1>
//         <div className='flex justify-center mt-[18px]'>
//           <div className=" grid grid-cols-1 gap-[16px]  md:grid-cols-4 lg ">
//             <div>
//               <Image
//                 src="/Hackathon/Shop/lime.png"
//                 alt="Background for Our Menu"
//                 width={260}
//                 height={150}
//                 className="h-[250px]"
//               />
//               <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//               <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//             </div>

//             <div>
//               <Image
//                 src="/Hackathon/Shop/choco.png"
//                 alt="chocolate image"
//                 width={260}
//                 height={150}
//                 className="h-[250px] "
//               />
//               <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//               <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//             </div>

//             <div>
//               <Image
//                 src="/Hackathon/Shop/burger.png"
//                 alt="Background for Our Menu"
//                 width={260}
//                 height={150}
//                 className="h-[250px]"
//               />
//               <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//               <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//             </div>

//             <div>
//               <Image
//                 src="/Hackathon/Shop/Country Burger.png"
//                 alt="Background for Our Menu"
//                 width={260}
//                 height={150}
//                 className="h-[250px]"
//               />
//               <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
//               <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default ShopDetails