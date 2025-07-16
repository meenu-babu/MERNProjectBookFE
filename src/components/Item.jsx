import React, { useContext } from 'react'
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from '../context/ShopContext';
const Item=({book})=> {
    const {currency,addToCart}=useContext(ShopContext)
  return (
    <div>
        <div className='flex items-center justify-center bg-amber-50 p-6 rounded-3xl overflow-hidden relative group'>
            <img src={book.image} className='shadow-xl shadow-slate-900/30 rounded-lg'/>

         </div>
         <div className='p-3'>
            <div className='flex items-center justify-between'>
                <h4 className='text-[16px] md:text-[17px] mb-2 font-bold line-clamp-1 !my-0'>{book.name}
                    </h4>
                <span onClick={()=>addToCart(book._id)} className='flex items-center justify-center h-8 w-8 rounded cursor-pointer hover:bg-amber-50'><TbShoppingBagPlus  className='text-lg'/>

                </span>
            </div>
            <div className='flex items-center justify-between pt-1'>
                <p className='font-bold capitalize'>
                    {book.category}

                </p>
                <h5 className='text-[14px] md:text-[15px] mb-1 font-bold text-emerald-600 pr-2'>{currency}{book.price}.00</h5>

            </div>
            <p className='line-clamp-2 py-1'>{book.description}</p>
            </div>

    </div>
  )
}

export default Item