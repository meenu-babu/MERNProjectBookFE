import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import Footer from '../components/Footer'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null

      }
      const response = await axios.post(backendUrl + '/order/userOrders', {}, { headers: { token } })
      console.log(response.data)
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadOrderData()
  }, [token])
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12'>
      <div className='pt-28'>
        <Title title1={'Order'} title2={'List'} titleStyles={'text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold'} />
        {/* container */}
        {orderData.map((item, i) => (
          <div key={i} className='bg-blue-300/50 p-2 mt-3 rounded-lg'>
            <div className='text-gray-700 flex flex-col gap-4'>
              <div className='flex gap-x-3 w-full'>
                {/* image */}
                <div className='flex gap-6'>
                  <img src={item.image} alt="orderItemImage" width={55} className='object-cover aspect-square rounded' />
                </div>
                {/* order info */}
                <div className='block w-full'>
                  <h5 className='capitalize line-clamp-1'>{item.name}</h5>
                  <div className='flex items-center justify-between '>
                    <div>
                      <div className='flex items-center gap-x-1 sm:gap-x-3'>
                        <div className='flex items-center justify-center gap-x-1'>
                          <h5 className='text-[14px] font-[500]'>Price:</h5>
                          <p className='text-gray-400'>{currency}{item.price}</p>
                        </div>

                        <div className='flex items-center justify-center gap-x-1'>
                          <h5 className='text-[14px] font-[500]'>Quantity:</h5>
                          <p className='text-gray-400'>{item.quantity}</p>
                        </div>

                        <div className='sm:flex items-center justify-center gap-x-1'>
                          <h5 className='text-[14px] font-[500]'>Payment:</h5>
                          <p className='text-gray-400'>{item.paymentMethod}</p>
                        </div>
                        </div>
                        <div className='flex items-center justify-center gap-x-1'>
                          <h5 className='text-[14px] font-[500]'>Date:</h5>
                          <p className='text-gray-400'>{new Date(item.date).toDateString()}</p>
                        </div>

                       </div>

                      {/* status & button */}
                      <div className='flex flex-col xl:flex-row gap-3'>
                        <div className='flex items-center gap-2'>
                          <p className='min w-2 h-2 rounded-full bg-green-800
                          '></p>
                          <p className='text-gray-400'>{item.status}</p>
                        </div>
                        <button onClick={loadOrderData} className='  bg-blue-900  text-white px-1.5 py-1 rounded-full  text-xs'>Track Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
      <Footer/>
    </section>
  )
}

export default Orders