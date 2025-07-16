import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { books } from '../assets/data'
export const ShopContext = createContext()
const ShopContextProvider = (props) => {
  const currency = '₹'
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [cartItems, setcartItems] = useState({})

  // adding item to cart
  const addToCart = async (itemId) => {
    const cartData = { ...cartItems } //using a copy of the cartItems
    if (cartData[itemId]) {
      cartData[itemId] += 1
    }
    else {
      cartData[itemId] = 1
    }
    setcartItems(cartData)
  }
// getting total cart cartItems
const getCartCount=()=>{
  let totalCount=0
  for(const item in cartItems){
    try {
      if(cartItems[item] > 0){
        totalCount +=cartItems[item]
      }
    } catch (error) {
      console.log(error)
      
    }
  }
  return totalCount;
}

  const contextValue = { books, currency, navigate, token, setToken,cartItems,setcartItems,addToCart,getCartCount }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>)
}

export default ShopContextProvider