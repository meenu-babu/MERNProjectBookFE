import React from 'react'
import filter from "../assets/features/filter.png"
import rating from "../assets/features/rating.png"
import secure from "../assets/features/secure.png"
import wishlist from "../assets/features/wishlist.png"
const Features = () => {
  return (
   <section className='mx-auto max-w-[1440px] px-6 lg:px-12 py-16 bg-blue-50'>
    <div className=' mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12'>
      <div className='flex items-center justify-center flex-col gap-3'>
        <img src={filter} height={44} width={44}/>
        <div className='flex items-center justify-center  flex-col'>
          <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Advanced Search and Filters</h5>
          <hr className='w-8 bg-pink-600 h-1 rounded-full border-none'/>
        </div>
<p className='text-center'>Effortlessly search books by title,author,genre,or price range.</p>
      </div>


       <div className='flex items-center justify-center flex-col gap-3'>
        <img src={rating} height={44} width={44}/>
        <div className='flex items-center justify-center  flex-col'>
          <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>User Reviews and Ratings</h5>
          <hr className='w-8 bg-pink-600 h-1 rounded-full border-none'/>
        </div>
<p className='text-center'>Customers can share reviews,rate books,and guide future readers</p>
      </div>

<div className='flex items-center justify-center flex-col gap-3'>
        <img src={secure} height={44} width={44}/>
        <div className='flex items-center justify-center  flex-col'>
          <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Protected and Personilised Access</h5>
          <hr className='w-8 bg-pink-600 h-1 rounded-full border-none'/>
        </div>
<p className='text-center'> Secure and customized experience based on their preferences and activity.</p>
      </div>


 <div className='flex items-center justify-center flex-col gap-3'>
        <img src={wishlist} height={44} width={44}/>
        <div className='flex items-center justify-center  flex-col'>
          <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Wishlist and Favorites</h5>
          <hr className='w-8 bg-pink-600 h-1 rounded-full border-none'/>
        </div>
<p className='text-center'>Save books to wishlist for future purchase or easy access</p>
      </div>

    </div>

   </section>
  )
}

export default Features