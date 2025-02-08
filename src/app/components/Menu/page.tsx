import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faPizzaSlice, faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';


function Menu() {
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
          <h1 className="text-3xl font-bold">Our Menu</h1>
          <p className="text-sm mt-2">
            <a href="/" className="hover:underline text-orange-500">Home</a> › Menu
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 p-[150px]">
        <div className="w-full lg:w-1/2 ">
          <Image
            src="/Hackathon/star-menu.png"
            alt="Starter Menu Dish"
            width={440}
            height={500}
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-black mb-6">
            <span className="text-orange-500">⭐</span> Starter Menu
          </h2>
          <ul className="space-y-6">
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Alder Grilled Chinook Salmon
                </h3>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$32</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-orange-500">
                  Berries and creme tart
                </h3>
                <p className="text-gray-500 text-sm">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400 text-xs">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$43</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Tormentoso Bush Pizza Pintoage
                </h3>
                <p className="text-gray-500 text-sm">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400 text-xs">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$14</span>
            </li>
            <li className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Spicy Vegan Potato Curry
                </h3>
                <p className="text-gray-500 text-sm">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$35</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-16 p-32">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-black mb-6">
            <span className="text-orange-500">⭐</span> Main Course
          </h2>
          <ul className="space-y-6">
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Optic Big Breakfast Combo Menu
                </h3>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$32</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-orange-500">
                  Cashew Chicken With Stir-Fry
                </h3>
                <p className="text-gray-500 text-sm">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400 text-xs">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$43</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Vegetables & Green Salad
                </h3>
                <p className="text-gray-500 text-sm">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400 text-xs">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$14</span>
            </li>
            <li className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Spicy Vegan Potato Curry
                </h3>
                <p className="text-gray-500 text-sm">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$35</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 ">
          <Image
            src="/Hackathon/main-course.png"
            alt="Main Course Dish"
            width={400}
            height={500}
          />
        </div>
      </div>
      <div className="relative bg-[#0D0D0DD9] ">
        <img
          src="/Hackathon/icons-.png"
          alt="image"
          className=" lg:w-full lg:h-[400px] xs:w-auto xs:h-[700px]"
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center lg:mt-[10px] xs:mt-[300px] ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-32 text-center">
            <div>
              <div className="text-warning mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="h-12 w-12 text-yellow-500"
                />
              </div>
              <p className="text-lg text-white">Professional Chefs</p>
              <p className="text-2xl font-bold text-white">420</p>
            </div>

            <div>
              <div className="text-warning mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faBurger}
                  className="h-12 w-12 text-yellow-500"
                />
              </div>
              <p className="text-lg text-white">Items Of Food</p>
              <p className="text-2xl font-bold text-white">320</p>
            </div>

            <div>
              <div className="text-warning mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-12 w-12 text-yellow-500"
                />
              </div>
              <p className="text-lg text-white">Years Of Experience</p>
              <p className="text-2xl font-bold text-white">30+</p>
            </div>

            <div>
              <div className="text-warning mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faPizzaSlice}
                  className="h-12 w-12 text-yellow-500"
                />
              </div>
              <p className="text-lg text-white">Happy Customers</p>
              <p className="text-2xl font-bold text-white">220</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 p-[100px]">
        <div className="w-full lg:w-1/2 ">
          <Image
            src="/Hackathon/dessert.png"
            alt="Starter Menu Dish"
            width={440}
            height={500}
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-black mb-6">
            <span className="text-orange-500">⭐</span> Dessert
          </h2>
          <ul className="space-y-6">
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Fig and lemon cake
                </h3>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$32</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg">
                  Creamy mascarpone cake
                </h3>
                <p className="text-gray-500 text-sm">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400 text-xs">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$43</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Pastry, blueberries, lemon juice
                </h3>
                <p className="text-gray-500 text-sm">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400 text-xs">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$14</span>
            </li>
            <li className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Pain au chocolat
                </h3>
                <p className="text-gray-500 text-sm">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$35</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 p-32 pb-[10px] pt-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-black mb-6">
            <span className="text-orange-500">⭐</span> Drinks
          </h2>
          <ul className="space-y-6">
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Caffè macchiato
                </h3>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$32</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg ">
                  Aperol Spritz Capacianno
                </h3>
                <p className="text-gray-500 text-sm">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400 text-xs">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$43</span>
            </li>
            <li className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Caffe Latte Campuri
                </h3>
                <p className="text-gray-500 text-sm">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400 text-xs">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$14</span>
            </li>
            <li className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Tormentoso BushTea Pintoage
                </h3>
                <p className="text-gray-500 text-sm">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$35</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 ">
          <Image
            src="/Hackathon/drink.png"
            alt="Main Course Dish"
            width={400}
            height={500}
          />
        </div>
      </div>

      <div>
        <div className='flext justify-center mt-16'>
          <p className='text-center'>Partners & Clients</p>
          <h1 className='text-[32px] text-center'>We work with the best pepole</h1>
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/Hackathon/menu-partners-icon/restaurant.png'}
            alt="Partners & Clients Image"
            width={200}
            height={200}
          />
          <Image
            src={'/Hackathon/menu-partners-icon/bakery.png'}
            alt="Partners & Clients Image"
            width={200}
            height={200}
          />
          <Image
            src={'/Hackathon/menu-partners-icon/spoon.png'}
            alt="Partners & Clients Image"
            className='h-[150px] mt-4 p-2'
            width={200}
            height={150}
          />
          <Image
            src={'/Hackathon/menu-partners-icon/coffee.png'}
            alt="Partners & Clients Image"
            className='h-[150px] mt-4 p-2'
            width={200}
            height={150}
          />
          <Image
            src={'/Hackathon/menu-partners-icon/bistro.png'}
            alt="Partners & Clients Image"
            className='h-[150px] mt-4 p-2'
            width={200}
            height={150}
          />
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default Menu