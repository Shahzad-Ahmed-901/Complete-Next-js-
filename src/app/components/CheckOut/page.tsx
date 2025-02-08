'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import BlogSidebar from "../BlogSidebar/page"
import { FaRegCalendarAlt, FaRegComment, FaReply, FaUserCircle } from 'react-icons/fa'
import Footer from '../Footer/page'
import Navbar from '../Navbar/page'

const ShopDetails = () => {
  type Comment = {
    id: number;
    name: string;
    avatar: string;
    date: string;
    text: string;
  };

  const initialComments: Comment[] = [
    { id: 1, name: "MD Sojib Khan", avatar: "Hackathon/BlogDetails/comment-1.png", date: "June 22, 2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin." },
    { id: 2, name: "MD Moon Khan", avatar: "Hackathon/BlogDetails/comment-3.png", date: "June 22, 2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin." },
    { id: 3, name: "MD Gulli Khan", avatar: "https://via.placeholder.com/40", date: "June 22, 2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. " }
  ];

  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && name.trim() && email.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        name,
        avatar: "https://via.placeholder.com/40",
        date: new Date().toLocaleDateString(),
        text: comment,
      };
      setComments([...comments, newComment]);
      setComment('');
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center h-[300px] mx[200px]">
        <Image src="/Hackathon/menu-image.png" alt="Background for Our Menu" layout="fill" objectFit="cover" className="-z-10" />
        <div className="text-center text-white z-10">
          <h1 className="text-3xl font-bold">Blog List</h1>
          <p className="text-sm mt-2">
            <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'>Shopping cart</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center mx-[200px] gap-4 p-4">
        <div>
          <Image src="/Hackathon/BlogDetails/chicken-dish.png" alt='' width={500} height={400} />
          <div className="flex text-gray-500 text-sm mt-4">
            <FaRegCalendarAlt className="text-orange-500 mr-1" />
            <span className="mr-2">Feb 14, 2022</span>
            <FaRegComment className="text-orange-500 mx-1" />
            <span className="mr-2">{comments.length} Comments</span>
            <FaUserCircle className="text-orange-500 mx-1" />
            <span>Admin</span>
          </div>
          <h1 className='font-bold'>10 Reasons To Do A Digital Detox Challenge</h1>
          <p className='text-[13px] p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <div className='bg-[#FF9F0D] w-[500px]'>
            <p className='text-white p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
        <div className='mx-[50px]'>
          <BlogSidebar />
        </div>

        <div className="max-w-4xl ">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 text-justify">
              <p className="mb-4 text-[12px] w-[510px] mt-[-200px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

              <div className='flex w-[500px]'>
                <p className="mb-4 text-[12px] w-[340px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.          </p>
                <div className="md:w-1/3 md:ml-6 ">
                  <Image
                    src="/Hackathon/BlogDetails/nodals.png"
                    alt="Delicious ramen bowl with eggs and chopsticks"
                    width={1000}
                    height={400}
                    className=" h-[200px] w-[400px]"
                  />
                </div>
              </div>

              <p className="mb-4 text-[12px] w-[460px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              </p>
              <p className='text-[12px] w-[500px]'>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <p className="mb-4 text-[12px] w-[500px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
            </div>

          </div>
        </div>
      </div>



      <div className='w-[590px] p-6 mx-[200px]'>
        <h2 className="text-xl font-bold">Comments - {comments.length}</h2>
        {comments.length > 0 && (
          <>
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center gap-2">
                <img src={comments[0].avatar} alt={comments[0].name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{comments[0].name}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <FaRegCalendarAlt className="mr-1" /> {comments[0].date}
                  </p>
                </div>
                <FaReply className="mr-1" /> Reply
              </div>

              <p className="mt-2 text-gray-700">{comments[0].text}</p>
              <button className="text-orange-500 flex items-center mt-2">

              </button>
            </div>
            {comments.length > 1 && (
              <div className="border-b pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <img src={comments[1].avatar} alt={comments[1].name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{comments[1].name}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <FaRegCalendarAlt className="mr-1" /> {comments[1].date}
                    </p>
                  </div>
                  <FaReply className="mr-1 text-orange-500" /> Reply
                </div>
                <p className="mt-2 text-gray-700">{comments[1].text}</p>
                <button className="text-orange-500 flex items-center mt-2">
                </button>
              </div>
            )}
          </>
        )}

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Post a comment</h3>
          <form className="mt-4 space-y-4" onSubmit={handleCommentSubmit}>
            <div className="flex gap-4">
              <input type="text" placeholder="Name*" className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email*" className="border p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <textarea placeholder="Write a comment" className="border p-2 w-full h-24" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopDetails;