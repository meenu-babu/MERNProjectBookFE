import React, { useContext, useState } from 'react'
import Title from '../components/Title'

import Footer from '../components/Footer'
import CartTotal from './CartTotal'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {
  const {books,navigate, token, cartItems, setcartItems,  getCartAmount, delivery_charges, backendUrl }=useContext(ShopContext)
  const [method, setMethod] = useState('cod')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems=[]

      for(const itemId in cartItems){
        if(cartItems[itemId] > 0){
          const itemInfo=books.find((book)=>book._id === itemId)
          if(itemInfo){
            orderItems.push({
              ...itemInfo,
              quantity:cartItems[itemId]
            })
          }
        }
      }
      console.log(orderItems)

      let orderData={
        address:formData,
        items:orderItems,
        amount:getCartAmount()+delivery_charges
      }
      switch(method){
        case 'cod':
          const response=await axios.post(backendUrl+'/order/place',orderData,{headers:{token}})
          if(response.data.success){
            setcartItems({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break;
          default:break;
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <section className=''>

      {/* Container */}/
      <form onSubmit={onSubmitHandler} className='pt-28'>
        <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
          {/* left side */}
          <div className='flex flex-1 flex-col gap-3 text-[95%]'>
            <Title title1={'Delivery'} title2={'Information'} titleStyles={'h3'} />
            <div className='flex gap-3'>
              <input onChange={onChangeHandler} value={formData.firstName} type='text' name='firstName' placeholder='First Name' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none w-1/2' required/>
              <input onChange={onChangeHandler} value={formData.lastName} type='text' name='lastName' placeholder='Last Name' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2 '  required/>

            </div>

            <input onChange={onChangeHandler} value={formData.email} type='email' name='email' placeholder='Email' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none'  required/>
            <input onChange ={onChangeHandler} value={formData.phone} type='text' name='phone' placeholder='Phone Number' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none'  required/> 
            <input onChange={onChangeHandler} value={formData.street} type='text' name='street' placeholder='Street' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none'  required/>

            <div  className='flex gap-3'>
              <input onChange={onChangeHandler} value={formData.city} type='text' name='city' placeholder='City' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none w-1/2'   required />
              <input onChange={onChangeHandler} value={formData.state} type='text' name='state' placeholder='State' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none w-1/2'  required />
            </div>


            <div className='flex gap-3'>
              <input onChange={onChangeHandler} value={formData.zipcode} type='text' name='zipcode' placeholder='Zip Code' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none'  required/> 
              <input onChange={onChangeHandler} value={formData.country} type='text' name='country' placeholder='Country' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm  outline-none'  required/>

            </ div>
          </div>

          {/* right side */}
          <div className='flex flex-1 flex-col'>
            <CartTotal />
            {/* payment method */}
            <div className='my-6'>
              <h3 className='text-[20px] font-[700] mb-5'> Payment <span className='text-amber-900'>Method</span></h3>
              <div className='flex gap-3'>
                <div onClick={() => setMethod('stripe')} className={`${method === 'stripe' ? " bg-green-900/80  text-white px-7 py-2.5 rounded-full" : "bg-white ring-1 ring-gray-200 text-gray-500 px-7 py-2.5 rounded-full"}`}>Stripe</div>
                <div onClick={() => setMethod('cod')} className={`${method === 'cod' ? "bg-green-900/80  text-white px-7 py-2.5 rounded-full" : " bg-white  ring-1 ring-gray-200 text-gray-500 px-7 py-2.5 rounded-full"}`}>COD</div>
              </div>
            </div>
            <div>
              <button type='submit' className=' medium-14 bg-blue-900 text-white px-7 py-2.5 rounded-full '>Place Order</button>
            </div>
          </div>
        </div>

      </form>
      <Footer />
    </section>
  )
}

export default PlaceOrder