import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0D0D0DF2]">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <div className="text-orange-500 font-bold text-2xl">
          Food<span className="text-white">Luck</span>
        </div>

        <div className="hidden md:flex gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/components/Menu">Menu</Link>
          <Link href="/components/Blog">Blog</Link>
          <Link href="#">Pages</Link>
          <div className="group relative">
            <button className="hover:text-orange-500">About ▼</button>
            <div className="hidden group-hover:block absolute bg-black text-white rounded shadow-lg mt-2">
              <Link href="/components/About-us" className="block px-4 py-2 hover:bg-orange-500 w-[120px]">About Us</Link>
              <Link href="/components/FAQ" className="block px-4 py-2 hover:bg-orange-500 w-[120px]">Our Team</Link>
            </div>
          </div>
          <Link href="/components/shop">Shop</Link>
          <Link href="#">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center border border-orange-500 rounded-full px-2">
            <input type="text" placeholder="Search..." className="bg-transparent text-white outline-none px-2 py-1" />
            <FaSearch className="text-white cursor-pointer" />
          </div>
          <FaShoppingBag className="text-white cursor-pointer" />
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg text-white bg-black">
          <Link href="/">Home</Link>
          <Link href="/components/Menu">Menu</Link>
          <Link href="/components/Blog">Blog</Link>
          <Link href="#">Pages</Link>
          <details className="w-full text-center">
            <summary className="hover:text-orange-500 cursor-pointer">About ▼</summary>
            <div className="flex flex-col items-center bg-black text-white">
              <Link href="/components/About-us" className="block px-4 py-2 hover:bg-orange-500 w-[120px]">About Us</Link>
              <Link href="/components/FAQ" className="block px-4 py-2 hover:bg-orange-500 w-[120px]">Our Team</Link>
            </div>
          </details>
          <Link href="/components/shop">Shop</Link>
          <Link href="#">Contact</Link>
          <div className="flex gap-4 text-xl mt-2">
            <FaSearch className="cursor-pointer" />
            <FaShoppingBag className="cursor-pointer" />
          </div>
        </ul>
      )}
    </div>
  );
}

export default Header;