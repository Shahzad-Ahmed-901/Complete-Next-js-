"use client";
import React from "react";
import Image from "next/image";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";


function Home() {
  return (
    <>
      <div className="bg-[#0D0D0D] opacity-[95%] h-[700px]">
        <Header />
        <div className="flex flex-col-reverse lg:flex-row items-center h-screen lg:justify-around px-4 lg:px-16">
          <div className="mt-8 lg:mt-0 text-center lg:text-left">
            <h1 className="text-[#FF9F0D] font-mono text-[24px] lg:text-[32px]">
              It's Quick & Amusing!
            </h1>
            <h1 className="text-[#FF9F0D] text-[36px] lg:text-[56px] leading-tight">
              Th<span className="text-white">
                e Art of speed <br /> food Quality
              </span>
            </h1>
            <p className="text-white text-[16px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </p>
            <div>
              <button className="text-white mt-4 rounded-[30px] px-12 py-4 bg-[#FF9F0D]">
                See Menu
              </button>
            </div>
          </div>
          <Image
            src={"/Hackathon/hero-image.png"}
            alt="image"
            width={400}
            height={400}
          />
        </div>
      </div>

      <section className="bg-black text-white py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-[#FF9F0D] text-lg mb-2">About us</h4>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#FF9F0D]">We</span> Create the best foody
              product
            </h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
              <li>
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
            <button className="bg-[#FF9F0D] text-black font-bold px-6 py-3 rounded hover:bg-yellow-500 transition">
              Read More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2">
              <Image className="h-[200px] rounded-lg"
                src={"/Hackathon/about-section.png"}
                alt="image"
                width={500}
                height={200}
              />
            </div>
            <div>
              <Image className="h-[200px] rounded-lg"
                src={"/Hackathon/Dash-2.png"}
                alt="image"
                width={250}
                height={250}
              />
            </div>
            <div>
              <Image className="h-[200px] rounded-lg mx-[-50px]"
                src={"/Hackathon/Dash-3.png"}
                alt="image"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-[#FF9F0D] font-bold text-center">
            <h1> Food Category</h1>
            <h1 className="text-[#FF9F0D] text-[48px]">Ch<span className="text-white ">oose Food Iteam</span></h1>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-8  lg:flex-row xs:flex-wrap sm:items-center">
          <div>
            <Image className="rounded-lg w-[390-px] h-[300px] xs:mb-28"
              src={"/Hackathon/Food-iteam-1.png"}
              alt="image"
              width={250}
              height={200}
            />
            <div className="flex-col mt-[-200px] ">
              <div className="mx-24 ">
                <button className="text-[18px] bg-white text-[#FF9F0D]  font-bold p-2 rounded">Save 30%</button>
              </div>
              <div>
                <button className="text-[20px] text-white bg-[#FF9F0D] font-bold p-2 rounded w-[200px]">Fast Food Dish</button>
              </div>
            </div>
          </div>
          <div>
            <Image className="rounded-lg w-[306-px] h-[300px]"
              src={"/Hackathon/Food-iteam-2.png"}
              alt="image"
              width={250}
              height={200}
            />
          </div>
          <div>
            <Image className="rounded-lg w-[306-px] h-[300px]"
              src={"/Hackathon/Food-iteam-3.png"}
              alt="image"
              width={250}
              height={200}
            />
          </div>
          <div>
            <Image className="rounded-lg w-[306-px] h-[300px]"
              src={"/Hackathon/Food-iteam-4.png"}
              alt="image"
              width={250}
              height={200}
            />
          </div>
        </div>

        <div className="bg-black text-white py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 grid-rows-3 gap-2">
              <Image
                src="/Hackathon/food-1.png"
                alt="Tacos"
                className="rounded-lg object-cover row-span-2 w-[300px] h-[300px]"
                width={300}
                height={300}
              />
              <Image
                src="/Hackathon/Food-iteam-2.png"
                alt="Burger"
                className="rounded-lg object-cover w-[280px] h-[230px] mt-[80px]"
                width={280}
                height={230}
              />
              <Image
                src="/Hackathon/Food-iteam-3.png"
                alt="Chef preparing food"
                className="rounded-lg object-cover w-[360px] h-[200px] "
                width={360}
                height={200}
              />
              <Image
                src="/Hackathon/sllice.png"
                alt="Sandwich"
                className="rounded-lg object-cover w-[244px] h-[306px] mt-[-280px]"
                width={244}
                height={306}
              />
              <Image
                src="/Hackathon/food-1.png"
                alt="Salad"
                className="rounded-lg object-cover w-[300px] h-[200px] "
                width={300}
                height={200}
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-orange-500 text-lg font-semibold">Why Choose Us</h3>
              <h1 className="text-4xl font-bold leading-tight my-4">
                Extra <span className="text-orange-500">ordinary</span> taste <br /> And Experienced
              </h1>
              <p className="text-gray-400 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
                sapien et arcu pharetra interdum eu eu velit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-orange-500 p-4 rounded-full inline-block">
                    <i className="fas fa-hamburger text-2xl"></i>
                  </div>
                  <p className="mt-2">Fast Food</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 p-4 rounded-full inline-block">
                    <i className="fas fa-utensils text-2xl"></i>
                  </div>
                  <p className="mt-2">Lunch</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 p-4 rounded-full inline-block">
                    <i className="fas fa-wine-glass text-2xl"></i>
                  </div>
                  <p className="mt-2">Dinner</p>
                </div>
              </div>
              <div className="bg-orange-500 text-black text-center p-4 rounded-lg">
                <h2 className="text-3xl font-bold">30+</h2>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <FontAwesomeIcon icon={faBurger} className="h-12 w-12 text-yellow-500"
                />
              </div>
              <p className="text-lg text-white">Items Of Food</p>
              <p className="text-2xl font-bold text-white">320</p>
            </div>

            <div>
              <div className="text-warning mx-auto mb-4">
                <FontAwesomeIcon icon={faStar}
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


      <div className="bg-black text-white py-16">
        <div className="text-center mb-8">
          <p className="text-yellow-500 italic text-lg">Choose & pick</p>
          <h2 className="text-4xl font-bold mt-2">
            <span className="text-yellow-500">From</span> Our Menu
          </h2>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <p className="text-yellow-500 cursor-pointer">Breakfast</p>
          <p className="cursor-pointer hover:text-yellow-500">Lunch</p>
          <p className="cursor-pointer hover:text-yellow-500">Dinner</p>
          <p className="cursor-pointer hover:text-yellow-500">Dessert</p>
          <p className="cursor-pointer hover:text-yellow-500">Drink</p>
          <p className="cursor-pointer hover:text-yellow-500">Snack</p>
          <p className="cursor-pointer hover:text-yellow-500">Soups</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <Image
              src="/Hackathon/dish-choose.png"
              alt="Menu Image"
              width={350}
              height={350}
              className="rounded-full"


            />
            <Image
              src="/Hackathon/menu.png"
              alt="Dish Image"
              width={500}
              height={500}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
            />
          </div>
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/lettuce.png"
                alt="Lettuce Leaf"
                width={60}
                height={40}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Lettuce Leaf</h4>
                <p className="text-sm text-gray-400">Salad, dishes with vegetables.</p>
                <p className="text-yellow-500 font-bold">$12.55</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/breakfast.png"
                alt="Fresh Breakfast"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Fresh Breakfast</h4>
                <p className="text-sm text-gray-400">Delicious morning dishes.</p>
                <p className="text-yellow-500 font-bold">$14.55</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/butter.png"
                alt="Mild Butter"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Mild Butter</h4>
                <p className="text-sm text-gray-400">Soft and fresh butter.</p>
                <p className="text-yellow-500 font-bold">$11.45</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/bread.png"
                alt="Fresh Bread"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Fresh Bread</h4>
                <p className="text-sm text-gray-400">Daily baked bread.</p>
                <p className="text-yellow-500 font-bold">$12.65</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/cheese.png"
                alt="Glow Cheese"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Glow Cheese</h4>
                <p className="text-sm text-gray-400">Tasty cheese dishes.</p>
                <p className="text-yellow-500 font-bold">$12.55</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/italian.png"
                alt="Italian Pizza"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Italian Pizza</h4>
                <p className="text-sm text-gray-400">Cheesy and crispy pizza.</p>
                <p className="text-yellow-500 font-bold">$14.45</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/sllice.png"
                alt="Slice Beef"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Slice Beef</h4>
                <p className="text-sm text-gray-400">Juicy and soft beef.</p>
                <p className="text-yellow-500 font-bold">$12.85</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/Hackathon/mushroom.png"
                alt="Mushroom Pizza"
                width={60}
                height={60}
                className="rounded-lg h-[60px]"
              />
              <div>
                <h4 className="text-lg font-semibold">Mushroom Pizza</h4>
                <p className="text-sm text-gray-400">Fresh mushroom topping.</p>
                <p className="text-yellow-500 font-bold">$12.55</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-yellow-500 italic text-lg">Chafs</p>
          <h2 className="text-4xl font-bold mt-2">
            <span className="text-yellow-500">Me</span>et Our Chef
          </h2>
        </div>
        <div className="flex gap-[10px] justify-center xs:flex-wrap">
          <div>
            <Image
              src={"/Hackathon/chaf-1.png"}
              alt=""
              width={312}
              height={380}
              className="w-[300px] h-[350px] rounded-[12px]"
            />

          </div>
          <div>
            <Image
              src={"/Hackathon/chaf-2.png"}
              alt=""
              width={312}
              height={380}
              className="w-[300px] h-[350px] rounded-[12px]"
            />
          </div>
          <div>
            <Image
              src={"/Hackathon/chaf-3.png"}
              alt=""
              width={312}
              height={380}
              className="w-[300px] h-[350px] rounded-[12px]"
            />
          </div>
          <div>
            <Image
              src={"/Hackathon/chaf-4.png"}
              alt=""
              width={312}
              height={380}
              className="w-[300px] h-[350px] rounded-[12px]"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="  w-24 text-[18px] border-2 border-orange-500 text-white p-2 rounded-lg ">See More</p>
        </div>

        <div>
          <div className="mx-32 mt-28">
            <p className="text-yellow-500 italic text-lg">Testimonials</p>
            <h2 className="text-4xl font-bold mt-2">
              What our client are saying
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="relative bg-white rounded-lg shadow-lg max-w-md text-center p-6">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="Hackathon/testimonal.png"
                  className="w-16 h-16 rounded-full border-4 border-black"
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
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "400px",
            backgroundImage: "url('/Hackathon/Restaurant.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: "550px",
              textAlign: "right",
              padding: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                color: "#ffa500",
                fontSize: "1.2rem",
              }}
            >
              Restaurant Active Process
            </p>
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                margin: "1rem 0",
                alignItems: "left"
              }}
            >
              We Document Every Food Bean Process until it is saved
            </h2>
            <p
              style={{
                margin: "1rem 0",
                lineHeight: "1.5",
                color: "#ccc",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <button
                style={{
                  padding: "0.8rem 1.5rem",
                  background: "transparent",
                  border: "2px solid #ffa500",
                  borderRadius: "50px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Read More
              </button>
              <button
                style={{
                  padding: "0.8rem 1.5rem",
                  background: "#ffa500",
                  borderRadius: "50px",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              > ▶</button>
              <button>Play Video</button>
            </div>
          </div>
        </div>


        <div className="flex justify-center bg-black text-white p-6 ">
          <div className="text-center mb-8 mt-8">
            <h2 className="text-yellow-400 text-xl font-bold">Blog Post</h2>
            <h1 className="text-3xl font-bold">Latest News & Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8 ">
              <div className="bg-black text-white  overflow-hidden border border">
                <Image
                  src="/Hackathon/card-1.png"
                  alt="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
                  width={300}
                  height={200}
                />
                <div className="p-4">
                  <p className="text-yellow-400 text-sm mb-2">10 February 2022</p>
                  <h3 className="text-lg font-bold mb-4 justify-center">Pellentesque Non Efficitur Mi <br /> Aliquam Convallis Mi Quis</h3>
                  <div className="flex gap-32 items-center ">
                    <button>learn more</button>
                    <div className="flex space-x-4">
                      <Heart className="text-yellow-400 cursor-pointer" />
                      <MessageSquare className="text-yellow-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white overflow-hidden border border-1">
                <Image
                  src="/Hackathon/card-2.png"
                  alt="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
                  className="h-[300px]"
                  width={300}
                  height={200}
                />
                <div className="p-4">
                  <p className="text-yellow-400 text-sm mb-2">10 February 2022</p>
                  <h3 className="text-lg font-bold mb-4 justify-center">Morbi Sodales Tellus Elit, In <br /> Blandit Risus Suscipit A</h3>
                  <div className="flex gap-32 items-center ">
                    <button>learn more</button>
                    <div className="flex space-x-4">
                      <Heart className="text-yellow-400 cursor-pointer" />
                      <MessageSquare className="text-yellow-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white overflow-hidden border border-1">
                <Image
                  src="/Hackathon/card-3.png"
                  alt="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
                  className="h-[300px]"
                  width={300}
                  height={200}
                />
                <div className="p-4">
                  <p className="text-yellow-400 text-sm mb-2">10 February 2022</p>
                  <h3 className="text-lg font-bold mb-4 justify-center">Curabitur rutrum velit ac <br /> congue malesuada</h3>
                  <div className="flex gap-32 items-center ">
                    <button>learn more</button>
                    <div className="flex space-x-4">
                      <Heart className="text-yellow-400 cursor-pointer" />
                      <MessageSquare className="text-yellow-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );

}

export default Home;