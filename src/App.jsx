
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {
 
  return (
    <>
    <main className='overflow-hidden bg-primary'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/shop' element={<Shop/>}/>
      </Routes>
      </main>
     
    </>
  )
}

export default App
