import React from 'react'

const Title=({title1,title2,titleStyles,paraStyles}) =>{
  return (
    <div className={`${titleStyles} pb-1`}>
        <h2 className={`${titleStyles} text-3xl md:text-4xl font-semibold text-center`}>{title1}
            <span className='text-amber-900 ps-2 font-bold '>
                {title2}
            </span>
        </h2>
        <p className={`${paraStyles} hidden text-lg md:text-xl text-gray-600 mb-8 italic `}>Every great adventure starts with a new arrival....Brand-new books. Timeless adventures.....
        </p>
    </div>
  )
}

export default Title