import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { books } from '../assets/data'
export const ShopContext = createContext()
const ShopContextProvider = (props) => {
  const currency = '₹'
  const delivery_charges=50
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [cartItems, setcartItems] = useState({})

  // adding item to cart
  const addToCart = async (itemId) => {
    console.log("cart items:",cartItems)
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
    console.log("cart item:",item)
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

// getting total cart amount
const getCartAmount=()=>{
  let totalAmount=0
  for(const item in cartItems){
    if(cartItems[item] > 0){
      let itemInfo=books.find((book)=>book._id===item)
      if(itemInfo){
        totalAmount+=itemInfo.price * cartItems[item]
      }
    }
  }
  return totalAmount
}

//updating the quantity
const updateQuantity=async(itemId,quantity)=>{
  const cartData={...cartItems}
  cartData[itemId]=quantity
  setcartItems(cartData)
}

  const contextValue = { books, currency, navigate, token, setToken,cartItems,setcartItems,addToCart,getCartCount,updateQuantity,getCartAmount ,delivery_charges}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>)
}

export default ShopContextProvider