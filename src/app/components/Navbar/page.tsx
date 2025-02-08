// 'use client'
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white">
//       <div className="flex justify-around items-center px-6 py-4 md:px-12">
//         <h1 className="text-2xl font-bold text-orange-500">
//           Food<span className="text-white">Luck</span>
//         </h1>

//         <ul className="hidden md:flex gap-6 text-lg">
//           <Link href="/">Home</Link>
//           <Link href="/components/Menu">Menu</Link>
//           <Link href="/components/Blog">Blog</Link>
//           <Link href="#">Pages</Link>
//           <Link href="#">About</Link>
//           <Link href="/components/shop">Shop</Link>
//           <Link href="#">Contact</Link>
//         </ul>

//         <div className="hidden md:flex gap-4 text-xl">
//           <FaSearch className="cursor-pointer" />
//           <FaUser className="cursor-pointer" />
//           <FaShoppingBag className="cursor-pointer" />
//         </div>

//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {isOpen && (
//         <ul className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg bg-black">
//           <Link href="/">Home</Link>
//           <Link href="/components/Menu">Menu</Link>
//           <Link href="/components/Blog">Blog</Link>
//           <Link href="#">Pages</Link>
//           <Link href="#">About</Link>
//           <Link href="/components/shop">Shop</Link>
//           <Link href="#">Contact</Link>

//           <div className="flex gap-4 text-xl">
//             <FaSearch href="" />
//             <FaUser href="/components/SignUp" />
//             <FaShoppingBag />
//           </div>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;