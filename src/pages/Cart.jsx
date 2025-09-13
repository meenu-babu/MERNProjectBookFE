import React, { useContext } from 'react'
import { TbTrash } from 'react-icons/tb'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import CartTotal from './CartTotal'
import Footer from '../components/Footer'


const Cart = () => {
  const { books, navigate, currency, cartItems,getCartAmount,updateQuantity} = useContext(ShopContext)
  return (
    <section className='px-4 '>
      <div className='pt-28'>
        {/* Title */}
        <Title title1={'Cart'} title2={'List'} titleStyles={'h3'} />
        {/* cart items */}
        <div className='mt-6 px-5'>
          {books.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className=' bg-blue-700/20 p-2 mb-2 rounded-lg'>
                  <div className='flex gap-x-2'>
                    <div className='flex items-start gap-6'>
                      <img src={item.image} className='w-20 h-24 object-cover rounded' />
                    </div>

                    <div className='flex flex-col w-full'>
                      <h5 className='text-[14px] md:text-[15px] mb-1 font-bold !my-0 line-clamp-1'>{item.name}</h5>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='mb-1.5'>{item.category}</p>
                          <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-white'>
                            <button onClick={()=>updateQuantity(item._id,cartItems[item._id]-1)} className='px-2 py-1 bg-white rounded-full  shadow-md'><FaMinus className='text-xs' /></button>
                            <p className='px-2'>{cartItems[item._id]}</p>
                            <button onClick={()=>updateQuantity(item._id,cartItems[item._id]+1)} className='px-2 py-1 bg-white rounded-full  shadow-md'><FaPlus className='text-xs' /></button>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <h4 className='text-[16px] md:text-[17px] mb-2 font-bold'>{currency}{item.price}</h4>
                        <TbTrash onClick={()=>updateQuantity(item._id,cartItems[item._id],0)} className='cursor-pointer text-xl text-red-800'/>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return null;
          })}
        </div>

        {/* cart summary */}
        <div className='flex mt-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <button onClick={()=>navigate('/place-order')} className=' text-[14px] font-[500] bg-blue-900 ring-1 ring-secondary text-white px-4 py-2.5 rounded-full mt-6'>
Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Cart