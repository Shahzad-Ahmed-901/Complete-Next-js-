'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <h1 className="text-3xl font-bold">FAQ  Page</h1>
            <p className="text-sm mt-2">
              <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'> faq</span>
            </p>
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <h1 className='text-[32px] font-bold text-center'>Questions Looks Here</h1>
        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>

      <div className='flex justify-center mt-16 gap-4 '>
        <div className='w-[520px] border p-4 rounded shadow-md bg-[#FAF7F2] relative'>
          <button className="absolute top-4 right-4 text-xl">+</button>
          <h1 className="font-semibold">How we serve food?</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='w-[520px] border p-4 rounded shadow-md bg-[#FAF7F2] relative'>
          <button className="absolute top-4 right-4 text-xl">+</button>
          <h1 className="font-semibold">How we serve food?</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
      </div>

      <div className='flex justify-center mt-4 gap-4'>
        <div className='w-[520px] border p-4 rounded shadow-md bg-[#FAF7F2] relative'>
          <button className="absolute top-4 right-4 text-xl">+</button>
          <h1 className="font-semibold">How we serve food?</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='w-[520px] border p-4 rounded shadow-md bg-[#FAF7F2] relative'>
          <button className="absolute top-4 right-4 text-xl">+</button>
          <h1 className="font-semibold">How we serve food?</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
      </div>

      <div className='flex justify-center mt-4 gap-4 mb-[100px]'>
        <div className='w-[520px] border p-4 rounded shadow-md bg-[#FAF7F2] relative'>
          <button className="absolute top-4 right-4 text-xl">+</button>
          <h1 className="font-semibold">How we serve food?</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='w-[520px] border p-4 rounded shadow-md bg-[#FAF7F2] relative '>
          <button className="absolute top-4 right-4 text-xl">+</button>
          <h1 className="font-semibold">How we serve food?</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FAQ