import React, { useContext, useEffect, useState } from 'react'

import { RiSearch2Line } from 'react-icons/ri'
import { categories } from '../assets/data'
import { LuSettings2 } from 'react-icons/lu'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'
import Footer from '../components/Footer'

const Shop = () => {
    const { books } = useContext(ShopContext)
    const [category, setcategory] = useState([])
    const [sortType, setsortType] = useState("relevant")
    const [filteredBooks, setfilteredBooks] = useState([])
    const [search, setsearch] = useState()
    const [currentPage, setcurrentPage] = useState(1)
  

    // states for pagination
    const itemsPerPage = 10;
    const toggleFilter = (value, setState) => {
        setState((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
    }
    const applyFilters = () => {
        let filtered = [...books]
        if (search) {
            filtered = filtered.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length) {
            filtered = filtered.filter((book) => category.includes(book.category))
        }
        return filtered
    }
    const applySorting = (booksList) => {
        switch (sortType) {
            case "low":
                return booksList.sort((a, b) => a.price - b.price)
            case "high":
                return booksList.sort((a, b) => b.price - a.price)
            default:
                return booksList
        }
    }


    useEffect(() => {
        let filtered = applyFilters()
        let sorted = applySorting(filtered)
        setfilteredBooks(sorted)
        setcurrentPage(1)
    }, [category, sortType, books, search])



    // get books for the current page
    const getPaginatedBooks=()=>{
        const startIndex=(currentPage-1)*itemsPerPage
        const endIndex=startIndex+itemsPerPage
        return filteredBooks.slice(startIndex,endIndex)
    }


    // total number of pages
    const totalPages=Math.ceil(filteredBooks.length/itemsPerPage)

    return (
        < section className='mx-auto max-w-[1440px] px-6 lg:px-12 bg-amber-950/5' >
            <div className='pt-28'>
                {/* Search box */}
                <div className='w-full max-w-2xl flex items-center justify-center'>
                    <div className='inline-flex items-center justify-center bg-blue-700/45 overflow-hidden w-full rounded-full p-4 px-5'>
                        <div className='text-lg cursor-pointer'><RiSearch2Line /></div>
                        <input value={search}  onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='Search here...'
                            className='border-none outline-none w-full text-sm pl-4 ' />
                        <div className='flex items-center justify-center cursor-pointer text-lg  pl-2'><LuSettings2 /></div>
                    </div>
                </div>
                {/* Categories filter */}
                <div className='mt-12 mb-16'>
                    <h3 className='h4 mb-4 hidden sm-flex'>Categories:</h3>
                    <div className='flex items-center justify-center  flex-wrap gap-x-12 gap-y-4'>
                        {categories.map((cat) => (
                            <label key={cat.name}>
                                <input value={cat.name} onChange={(e) => toggleFilter(e.target.value, setcategory)} type="checkbox" className='hidden peer' />
                                <div className='flex items-center flex-col gap-2 peer-checked:text-pink-800 cursor-pointer'>
                                    <div className='bg-blue-700/45 h-20 w-20 flex items-center justify-center rounded-full  '>
                                        <img src={cat.image} alt={cat.name} className='object-cover h-10 w-10' />
                                    </div>
                                    <span className='text-[14px] font-[500]'>{cat.name}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
                {/* books container */}
                <div className='mt-8'>
                    {/* title and sort */}
                    <div className=' flex items-center justify-between !items-start gap-7 flex-wrap pb-16 max-sm:flex items-center text-center'>
                        <Title title1={'Our'} title2={'Book List'} titleStyles={'pb-0 text-center'} />
                        <div className='flex items-center justify-center gap-x-2'>
                            <span className='hidden sm:flex text-[16px] font-[500]'>Sort by:</span>
                            <select onChange={(e)=>setsortType(e.target.value)} className='text-sm p-2.5 outline-none bg-amber-900/90 text-white rounded'>
                                <option value="relevant">Relevant</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>

                            </select>
                        </div>
                    </div>
                    {/* books */}
                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                        {getPaginatedBooks().length >0 ? (
                            getPaginatedBooks().map((book)=>(
                                <Item book={book} key={book._id}/>
                            ))
                        ):(
                            <p>No books found </p>
                        )}
                    </div>
                </div>

                {/* pagiantion */}
                <div className='flex items-center justify-center mt-14 mb-10 gap-4'>
                    {/* previous button*/}
                    <button disabled={currentPage===1} onClick={()=>setcurrentPage((prev)=>prev-1)} className={`text-[14px] font-[500] bg-amber-900 ring-1 ring-secondary text-white rounded-full py-1 px-3 ${currentPage===1 && "opacity-50 cursor-not-allowed"}`}>Previous</button>
                    {/* page numbers */}
                        {Array.from({length:totalPages},(_,index)=>(
                            <button key={index+1} onClick={()=>setcurrentPage(index+1)} className={`text-[14px] font-[500] bg-amber-900 text-white ring-1 ring-white  rounded-full hover:bg-white hover:text-amber-950 transition-all duration-300 py-1 px-3 ${currentPage===index+1 && "opacity-50 cursor-not-allowed"}`}>{index+1}</button>
                        ))}

                        {/* next button */}
                         <button disabled={currentPage===1} onClick={()=>setcurrentPage((prev)=>prev+1)} className={`text-[14px] font-[500] bg-amber-900 ring-1 ring-secondary text-white rounded-full py-1 px-3 ${currentPage===totalPages && "opacity-50 cursor-not-allowed"}`}>Next</button>
                </div>
            </div>
              <Footer/>
        </section >
      
    )
}
export default Shop