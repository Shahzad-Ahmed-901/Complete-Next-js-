import Image from 'next/image';
import React from 'react';
import { FaRegCalendarAlt, FaRegComment, FaUserCircle } from 'react-icons/fa'; // FontAwesome Icons
import { ArrowRight } from 'lucide-react';
import BlogSidebar from '../BlogSidebar/page';
import Navbar from '../Navbar/page';

const Blog = () => {
  return (<div>
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
        <h1 className="text-3xl font-bold">Blog List</h1>
        <p className="text-sm mt-2">
          <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'>Shopping cart</span>
        </p>
      </div>
    </div>

    <div className="flex justify-center mt-10 ">
      <div className="flex w-full max-w-6xl ">
        <div className="w-3/4 pr-10  mx-[300px]">
          <div className="flex flex-col mb-10">
            <Image src="/Hackathon/Blog/cart-1.png" alt="Blog Image" width={340} height={250} className=" w-[500px] h-[350px] " />
            <div className="flex text-gray-500 text-sm mt-4">
              <FaRegCalendarAlt className="text-orange-500 mr-1" />
              <span className="mr-2">Feb 14, 2022</span>
              <FaRegComment className="text-orange-500 mx-1" />
              <span className="mr-2">3 Comments</span>
              <FaUserCircle className="text-orange-500 mx-1" />
              <span>Admin</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mt-4">10 Reasons To Do A Digital Detox Challenge</h1>
            <p className="text-gray-600 text-sm mt-2 w-[500px]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='border border-yellow-500 w-[150px] p-3 mt-3 rounded-sm flex gap-2'>
              Read More <ArrowRight size={24} className="text-yellow-500" />
            </button>
          </div>

          <div className="flex flex-col mb-10">
            <Image src="/Hackathon/Blog/cart-2.png" alt="Blog Image" width={540} height={450} className="w-[500px] h-[350px]" />
            <div className="flex text-gray-500 text-sm mt-4">
              <FaRegCalendarAlt className="text-orange-500 mr-1" />
              <span className="mr-2">Feb 14, 2022</span>
              <FaRegComment className="text-orange-500 mx-1" />
              <span className="mr-2">3 Comments</span>
              <FaUserCircle className="text-orange-500 mx-1" />
              <span>Admin</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mt-4">Traditional Soft Pretzels with Sweet Beer Cheese</h1>
            <p className="text-gray-600 text-sm mt-2 w-[500px]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='border border-yellow-500 w-[150px] p-3 mt-3 rounded-sm flex gap-2'>
              Read More <ArrowRight size={24} className="text-yellow-500" />
            </button>
          </div>

          <div className="flex flex-col mb-10">
            <Image src="/Hackathon/Blog/cart-2.png" alt="Blog Image" width={540} height={450} className="w-[500px] h-[350px]" />
            <div className="flex text-gray-500 text-sm mt-4">
              <FaRegCalendarAlt className="text-orange-500 mr-1" />
              <span className="mr-2">Feb 14, 2022</span>
              <FaRegComment className="text-orange-500 mx-1" />
              <span className="mr-2">3 Comments</span>
              <FaUserCircle className="text-orange-500 mx-1" />
              <span>Admin</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mt-4">My Favorite Easy Black Pizza Toast Recipe</h1>
            <p className="text-gray-600 text-sm mt-2 w-[500px]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='border border-yellow-500 w-[150px] p-3 mt-3 rounded-sm flex gap-2'>
              Read More <ArrowRight size={24} className="text-yellow-500" />
            </button>
          </div>

          <div className="flex flex-col mb-10">
            <Image src="/Hackathon/Blog/cart-2.png" alt="Blog Image" width={540} height={450} className="w-[500px] h-[350px]" />
            <div className="flex text-gray-500 text-sm mt-4">
              <FaRegCalendarAlt className="text-orange-500 mr-1" />
              <span className="mr-2">Feb 14, 2022</span>
              <FaRegComment className="text-orange-500 mx-1" />
              <span className="mr-2">3 Comments</span>
              <FaUserCircle className="text-orange-500 mx-1" />
              <span>Admin</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mt-4">The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
            <p className="text-gray-600 text-sm mt-2 w-[500px]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='border border-yellow-500 w-[150px] p-3 mt-3 rounded-sm flex gap-2'>
              Read More <ArrowRight size={24} className="text-yellow-500" />
            </button>
          </div>
        </div>

        <div className="mx-[-600px]">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Blog;