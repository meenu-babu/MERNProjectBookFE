import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/bg.jpg"

function Hero() {
  return (
   <section className="mx-auto max-w-[1440px] px-6 lg:px-12">
  <div className="flex items-center justify-center gap-12 flex-col xl:flex-row">
    {/* Left Section */}
    <div className="flex flex-1 flex-col pt-12 xl:pt-32">
      <h1 className="text-[40px] md:text-[52px] leading-snug md:leading-[1.3] mb-6 font-extrabold text-gray-900 max-w-4xl tracking-tight">
        <span className="text-blue-600 italic">A writer</span> only begins a book,<br />
        <span className="text-pink-600 italic font-semibold">a reader</span> finishes it.
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-8 italic leading-relaxed max-w-2xl">
        Explore our shelves filled with timeless classics, modern bestsellers,
        and hidden gems — all waiting for your hands and heart.
      </p>

      <div className='mt-6'>
        <Link
          to="/store"
          className="text-white bg-amber-800 hover:bg-amber-900 ring-1 ring-offset-2 ring-amber-300 p-4  rounded-full font-bold transition-all duration-300 shadow-md"
        >
          Explore Now
        </Link>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex justify-center items-center ">
  <img
    src={bg}
    alt="Books background"
    className="w-[640px] h-[600px] object-cover"
  />
</div>

  </div>
</section>

  )
}

export default Hero