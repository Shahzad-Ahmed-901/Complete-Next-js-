import Image from 'next/image'
import React from 'react'
import Header from '../Header/page'
import { ChefHat, Utensils, Leaf } from 'lucide-react';
import { PlayCircle } from 'lucide-react'
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';

function AboutUs
  () {
  return (
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
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-sm mt-2">
            <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'> About</span>
          </p>
        </div>
      </div>

      <div className='flex '>
        <div>
          <div className="flex gap-2 p-4">
            <Image
              src={'/Hackathon/Blog/cart-1.png'}
              alt=''
              width={300}
              height={300}
              className=''
            />
            <Image
              src={'/Hackathon/Blog/about.png'}
              alt=''
              width={300}
              height={200}
              className='h-[240px] mt-10'
            />
          </div>
          <div className="">
            <Image
              src={'/Hackathon/Shop/lime.png'}
              alt=''
              width={300}
              height={300}
              className='mx-[325px] mt-[-86px] h-[280px]'
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto text-center md:text-left">
          <h4 className="text-orange-500 italic font-medium mb-2">About us</h4>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Food is an important part <br /> Of a balanced Diet
          </h2>
          <p className="text-gray-600 mt-4 w-[640px] justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br />
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
              Show more
            </button>
            <button className="flex items-center gap-2 text-gray-900 font-medium">
              <PlayCircle className="w-6 h-6 text-orange-500" /> Watch video
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="relative col-span-3 md:col-span-3">
            <Image
              src="/Hackathon/Blog/whyChoose.png"
              alt="Food Image"
              width={1000}
              height={600}
              className=" w-[1200px] h-[300px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center">
            <ChefHat className="w-10 h-10 text-orange-500" />
            <h3 className="text-lg font-semibold mt-4">Best Chef</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Utensils className="w-10 h-10 text-orange-500" />
            <h3 className="text-lg font-semibold mt-4">123 Item Food</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Leaf className="w-10 h-10 text-orange-500" />
            <h3 className="text-lg font-semibold mt-4">Clean Environment</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div >

          <Image
            src={"/Hackathon/About/Bg.png"}
            alt="Food Image"
            width={1200}
            height={200}
            className=''

          />
          <div className="flex flex-col items-center text-white mt-[-200px]">
            <span className="text-[32px]">Team Member</span>
            <p className="text-center text-[12px] w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-6 mt-10'>

        <div>
          <Image
            src={"/Hackathon/About/card-image.png"}
            alt="Food Image"
            width={400}
            height={200}
            className='h-[230px] w-[240px]'
          />
          <div className='bg-white border rounded'>
            <h3 className="text-lg font-semibold mt-4 text-center">Mark Henry</h3>
            <p className='text-lg  mt-1 text-center'>Owner</p>
          </div>
        </div>
        <div>
          <Image
            src={"/Hackathon/About/card-image.png"}
            alt="Food Image"
            width={400}
            height={200}
            className='h-[230px] w-[240px]'
          />
          <div className='bg-white border rounded'>
            <h3 className="text-lg font-semibold mt-4 text-center"> Lucky Helen</h3>
            <p className='text-lg  mt-1 text-center'>Chef</p>
          </div>
        </div>
        <div>
          <Image
            src={"/Hackathon/About/card-image.png"}
            alt="Food Image"
            width={400}
            height={200}
            className='h-[230px] w-[240px]'
          />
          <div className='bg-white border rounded'>
            <h3 className="text-lg font-semibold mt-4 text-center">Moon Henry</h3>
            <p className='text-lg  mt-1 text-center'>Founder</p>
          </div>
        </div>
        <div>
          <Image
            src={"/Hackathon/About/card-image.png"}
            alt="Food Image"
            width={400}
            height={200}
            className='h-[230px] w-[240px]'
          />
          <div className='bg-white border rounded'>
            <h3 className="text-lg font-semibold mt-4 text-center">Tom Monrow</h3>
            <p className='text-lg  mt-1 text-center'>Specialist</p>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-32 mt-28">
          <p className="text-yellow-500 italic text-lg">Testimonials</p>
          <h2 className="text-4xl font-bold mt-2">
            What our client are saying
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-screen ">
          <div className="relative bg-white rounded-lg shadow-lg max-w-md text-center p-6">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="Hackathon/About/testimonal.png"
                className="w-16 h-16 rounded-full border-4 "
              />
            </div>

            <div className="mt-8 mb-4">
              <p className="text-yellow-500 text-2xl font-bold">99</p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non vitae augue. Ut turpis massa, volutpat in
              felis. Suspendisse in neque.
            </p>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-gray-800">Alamin Hasan</h3>
            <p className="text-gray-500 text-xs">Food Specialist</p>
          </div>
        </div>
        <div className="flex justify-center mt-[-160px] space-x-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-10 mt-20">
        <h2 className="text-3xl font-semibold">Our <span className="text-orange-500">Food</span> Menu</h2>
        <p className="text-gray-500 mt-2 w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus pellentesque diam eget tincidunt molestie.
        </p>

        <div className="flex space-x-6 mt-6 border-b pb-2">
          <span className="text-orange-500 font-medium cursor-pointer">Breakfast</span>
          <span className="text-gray-500 cursor-pointer">Lunch</span>
          <span className="text-gray-500 cursor-pointer">Dinner</span>
          <span className="text-gray-500 cursor-pointer">Dessert</span>
          <span className="text-gray-500 cursor-pointer">Drink</span>
          <span className="text-gray-500 cursor-pointer">Snack</span>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 w-[80%]">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 w-[80%]">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-orange-500">Alder Grilled Chinook Salmon <span className="text-orange-500 float-right">325</span></h3>
            <p className="text-gray-500">Toasted French bread topped with onions, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
        </div>

        <button className="mt-6 px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">View menu</button>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs