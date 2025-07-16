import React, { useContext } from 'react'
import { TbTrash } from 'react-icons/tb'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import CartTotal from './CartTotal'

const Cart = () => {
  const { books, navigate, currency, cartItems } = useContext(ShopContext)
  return (
    <section className='px-4    '>
      <div className='pt-28'>
        {/* Title */}
        <Title title1={'Cart'} title2={'List'} titleStyles={'h3'} />
        {/* cart items */}
        <div className='mt-6 '>
          {books.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className=' bg-blue-700/20 p-2 mt-3 rounded-lg'>
                  <div className='flex gap-x-3'>
                    <div className='flex items-start gap-6'>
                      <img src={item.image} className='w-24 rounded' />
                    </div>

                    <div className='flex flex-col w-full'>
                      <h5 className='text-[14px] md:text-[15px] mb-1 font-bold !my-0 line-clamp-1'>{item.name}</h5>
                      <div className='flex items-start justify-between'>
                        <div>
                          <p className='mb-1.5'>{item.category}</p>
                          <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-white'>
                            <button className='p-1.5 bg-white rounded-full  shadow-md'><FaMinus className='text-xs' /></button>
                            <p className='px-2'>{cartItems[item._id]}</p>
                            <button className='p-1.5 bg-white rounded-full  shadow-md'><FaPlus className='text-xs' /></button>
                          </div>
                        </div>
                        <h4 className='text-[16px] md:text-[17px] mb-2 font-bold'>{currency}{item.price}</h4>
                        <TbTrash className='cursor-pointer text-xl text-red-800'/>
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
        <div>
          <div>
            <CartTotal/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart