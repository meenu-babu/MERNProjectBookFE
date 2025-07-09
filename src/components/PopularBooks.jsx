import React, { useEffect, useState } from 'react'
import Title from './Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const PopularBooks = () => {
  const {books}=useContext(ShopContext)
  const [popularBooks, setpopularBooks] = useState([])
  useEffect(()=>{
    const data=books.filter(item=>item.popular)
      setpopularBooks(data.slice(0,5))

  },[books])
  return (
    <section>
      <Title title1={'Popular'} title2={'Books'} titleStyles={'pb-10'} paraStyles={'!hidden'} />
      {/* container */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
        {
popularBooks.map(book=>(
  <div key={book._id}>
    <Item book={book}/>
    </div>
))
        }
      </div>
    </section>
  )
}

export default PopularBooks