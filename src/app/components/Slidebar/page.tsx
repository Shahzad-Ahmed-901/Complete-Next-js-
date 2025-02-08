'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';
function SignUp() {

  const [formData, setFormData] = useState({ name: '', email: '', password: '', remember: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

      <div >
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
            <h1 className="text-3xl font-bold">Sign up page</h1>
            <p className="text-sm mt-2">
              <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'> sign up</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen  m-[100px]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="mr-2"
              />
              <label>Remember me?</label>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded mb-3">
              Sign Up
            </button>
            <Link href="/forgot-password" className="text-sm text-gray-500 block text-right mb-3">
              Forgot password?
            </Link>
          </form>
          <div className="text-center text-gray-500 my-4">OR</div>
          <button className="w-full flex items-center justify-center border p-2 rounded mb-3">
            <FcGoogle className="mr-2" /> Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center border p-2 rounded">
            <FaApple className="mr-2" /> Sign up with Apple
          </button>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default SignUp