import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {currency,getCartAmount,updateQuantity,delivery_charges}=useContext(ShopContext)
  return (
    <div className='w-full'>
        {/* Title */}
        <Title title1={'Cart'} title2={'Total'} titleStyles={'text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold'}/>
        <div className='flex items-center justify-between pt-3'>
            <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>SubTotal:</h5>
            <p className='text-[14px] md:text-[15px] mb-1 font-bold'>{currency}{getCartAmount()}.00</p>
        </div>


        <hr className='mx-auto h-[1px] w-full bg-pink-900/20 my-1 border-0' />
        
<div className='flex items-center justify-between pt-3'>
            <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Shipping Fee:</h5>
            <p className='text-[14px] md:text-[15px] mb-1 font-bold'>{getCartAmount()===0 ? "0.00" :`${currency}${delivery_charges}.00`}</p>
        </div>
        <hr className='mx-auto h-[1px] w-full bg-pink-900/20 my-1 border-0' />

        

        <div className='flex items-center justify-between pt-3'>
            <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>SubTotal:</h5>
            <p className='text-[14px] md:text-[15px] mb-1 font-bold'>{currency}{getCartAmount()===0 ? "0.00" : getCartAmount()+ delivery_charges}.00</p>
        </div>
         <hr className='mx-auto h-[1px] w-full bg-pink-900/20 my-1 border-0' />
        

        </div>
  )
}

export default CartTotal