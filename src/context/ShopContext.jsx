import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


export const ShopContext = createContext()
const ShopContextProvider = (props) => {
  const currency = '₹'
  const delivery_charges = 50
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [books, setBooks] = useState([])
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [cartItems, setcartItems] = useState({})

  // adding item to cart
  const addToCart = async (itemId) => {
    console.log("cart items:", cartItems)
    const cartData = { ...cartItems } //using a copy of the cartItems
    if (cartData[itemId]) {
      cartData[itemId] += 1
    }
    else {
      cartData[itemId] = 1
    }
    setcartItems(cartData)
    if(token){
      try{
        await axios.post(backendUrl+'/cart/add',{itemId},{headers:{token}})
      }
      catch(error){
        console.log(error)
        toast.error(error.message)
      }
    }
  }


  // getting total cart cartItems
  const getCartCount = () => {
    let totalCount = 0
    for (const item in cartItems) {
      console.log("cart item:", item)
      try {
        if (cartItems[item] > 0) {
          totalCount += cartItems[item]
        }
      } catch (error) {
        console.log(error)

      }
    }
    return totalCount;
  }

  // getting total cart amount
  const getCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = books.find((book) => book._id === item)
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item]
        }
      }
    }
    return totalAmount
  }

  //updating the quantity
  const updateQuantity = async (itemId, quantity) => {
    const cartData = { ...cartItems }
    cartData[itemId] = quantity
    setcartItems(cartData)

    if(token){
      try{
        await axios.post(backendUrl+'/cart/update',{itemId,quantity},{headers:{token}})
      }
      catch(error){
        console.log(error)
        toast.error(error.message)
      }
    }
  }

  // getting all products data
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/product/getall')
      console.log(response.data)
      if (response.data.success) {
        setBooks(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // getting usercart data
  const getUserCart=async(token)=>{
    try {
      const response=await axios.post(backendUrl+'/cart/get',{},{headers:{token}})
      if(response.data.success){
        setcartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))//prevent logout upon reload the page if logged in
      getUserCart(localStorage.getItem('token'))
    }
    getProductsData()
  }, [])


  const contextValue = { books, currency, navigate, token, setToken, cartItems, setcartItems, addToCart, getCartCount, updateQuantity, getCartAmount, delivery_charges, backendUrl }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>)
}

export default ShopContextProvider