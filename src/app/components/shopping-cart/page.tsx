// 'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { FaTrash } from 'react-icons/fa';
// import Footer from '../Footer/page';
// import Navbar from '../Navbar/page';

// function ShoppingCart() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Burger", price: 25, qty: 1, image: "/image.png" },
//     { id: 2, name: "Fresh Lime", price: 25, qty: 1, image: "/image.png" },
//     { id: 3, name: "Pizza", price: 15, qty: 1, image: "/image.png" },
//     { id: 4, name: "Chocolate Muffin", price: 45, qty: 1, image: "/image.png" },
//     { id: 5, name: "Cheese Butter", price: 15, qty: 1, image: "/image.png" },
//   ]);

//   const updateQuantity = (id: number, amount: number) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
//       )
//     );
//   };

//   const removeItem = (id: number) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);


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
//           <h1 className="text-3xl font-bold">Shopping cart</h1>
//           <p className="text-sm mt-2">
//             <a href="/" className="hover:underline ">Home</a> › <span className='text-orange-500'>Shopping cart </span>
//           </p>
//         </div>
//       </div>

//       <div className="p-10">
//         <table className="w-full border-collapse border border-gray-200 text-left">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600">
//               <th className="p-3">Product</th>
//               <th className="p-3">Price</th>
//               <th className="p-3">Quantity</th>
//               <th className="p-3">Total</th>
//               <th className="p-3">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id} className="border-b border-gray-200">
//                 <td className="p-3 flex items-center gap-3">
//                   <Image src={"/Hackathon/shop-details-images/product-1.png"} alt={item.name} width={50} height={50} className="rounded" />
//                   {item.name}
//                 </td>
//                 <td className="p-3">${item.price}.00</td>
//                 <td className="p-3 flex items-center gap-2">
//                   <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 border">-</button>
//                   <span>{item.qty}</span>
//                   <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 border">+</button>
//                 </td>
//                 <td className="p-3 font-semibold">${item.price * item.qty}.00</td>
//                 <td className="p-3 text-red-500 cursor-pointer" onClick={() => removeItem(item.id)}>
//                   <FaTrash />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="grid grid-cols-2 gap-10 mt-10">
//           <div className="border p-5 rounded-md">
//             <h2 className="font-bold text-lg mb-3">Coupon Code</h2>
//             <p className="text-gray-600 text-sm mb-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
//             </p>
//             <div className="flex gap-3">
//               <input type="text" placeholder="Enter here code" className="border px-3 py-2 w-full rounded-md" />
//               <button className="bg-orange-500 text-white px-5 py-2 rounded-md">Apply</button>
//             </div>
//           </div>

//           <div className="border p-5 rounded-md">
//             <h2 className="font-bold text-lg mb-3">Total Bill</h2>
//             <div className="flex justify-between py-2 border-b">
//               <span>Cart Subtotal</span>
//               <span>${cartSubtotal}.00</span>
//             </div>
//             <div className="flex justify-between py-2 border-b">
//               <span>Shipping Charge</span>
//               <span>$0.00</span>
//             </div>
//             <div className="flex justify-between py-2 font-semibold">
//               <span>Total Amount</span>
//               <span>${cartSubtotal}.00</span>
//             </div>
//             <button className="w-full bg-orange-500 text-white py-3 mt-3 rounded-md">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default ShoppingCart