import React, { useContext, useEffect, useState } from 'react'
import loginImg from "../assets/login_side.jpg"
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const {token,setToken,navigate,backendUrl}=useContext(ShopContext)
  const [currState, setcurrState] = useState('Sign Up')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    try {
      if(currState === "Sign Up"){
        const response=await axios.post(backendUrl+'/user/register',{name,email,password})
        console.log(response.data)
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }

      }
      else{
        const response=await axios.post(backendUrl+'/user/login',{email,password})
        console.log(response.data)
         if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <section className='min-h-screen w-full grid grid-cols-1 md:grid-cols-[60%_40%] bg-blue-500/35'>
      {/* Image side */}
      <div className="h-0.5 w-full m-0 grid place-items-center bg-gray-100">
        <img src={loginImg} alt="Login" className="h-full w-full object-contain p-4" />
      </div>

      {/* Form side */}
      <div className='h-full ml-0 flex items-center justify-center w-full px-6 md:px-12 py-10  '>
        <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
<form onSubmit={onSubmitHandler} className="space-y-4">
  <div>
    <h2 className="text-2xl font-semibold mb-4">{currState}</h2>
  </div>

  {currState === "Sign Up" && (
    <>
      <div className='w-full'>
        <label htmlFor='name' className='text-[14px] font-[500]'>Name</label>
        <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="Name" className="w-full p-2  rounded bg-blue-800/20" />
      </div>
    </>
  )}

  <div className='w-full'>
    <label htmlFor='email' className='text-[14px] font-[500]'>Email</label>
    <input  onChange={(e)=>setemail(e.target.value)} value={email}  type="email" placeholder="Email" className="w-full p-2 rounded bg-blue-800/20" />
  </div>

  <div className='w-full'>
    <label htmlFor='password' className='text-[14px] font-[500]'>Password</label>
    <input  onChange={(e)=>setpassword(e.target.value)} value={password}  type="password" placeholder="Password" className="w-full p-2 bg-blue-800/20 rounded" />
  </div>
<div className='flex justify-center '>
<button type='submit' className='text-[14px] font-[500] bg-pink-800/90 text-white ring-1 ring-tertiary px-7 py-2.5 rounded-full w-3/4 '>
    {currState === "Sign Up" ? 'Sign Up' : 'Login'}
  </button>
</div>
  

  <div className='underline'>Forgot your Password?</div>

  {currState === 'Login' ? (
    <div className='underline'>Don't have an Account ? <span onClick={()=>setcurrState('Sign Up')} className='cursor-pointer hover:text-pink-900'>Create account</span></div>
  ) : (
    <div className='underline'>Already have an Account ? <span onClick={()=>setcurrState('Login')} className='cursor-pointer hover:text-pink-900'>Login</span></div>
  )}
</form>

        </div>
      </div>
    </section>

  )
}

export default Login