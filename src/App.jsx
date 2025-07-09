
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'

function App() {
 
  return (
    <>
    <main className='overflow-hidden bg-primary'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<Login/>}/>

      </Routes>
      </main>
     
    </>
  )
}

export default App
