import React from 'react'

const Item=({book})=> {
  return (
    <div>
        <div className='flex items-center justify-center bg-amber-50 p-6 rounded-3xl overflow-hidden relative group'>
            <img src={book.image} className='shadow-xl shadow-slate-900/30 rounded-lg'/>

         </div>
         <div className='p-3'>
            <div className='flex items-center justify-between'>
                <h4 className='text-[16px] md:text-[17px] mb-2 font-bold line-clamp-1 !my-0'>{book.name}
                    </h4>
                <span className='flexCenter h-8 w-8 flex items-center justify-center'>

                </span>
            </div>
            </div>

    </div>
  )
}

export default Item