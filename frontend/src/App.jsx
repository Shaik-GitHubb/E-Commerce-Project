import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUpEmailForm from './components/SignUpEmailForm'
import LoginForm from './components/LoginForm'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Home from './components/Home'
import Clothing from './components/Categories/Clothing'
import Electronics from './components/Categories/Electronics'
import Appliances from './components/Categories/Appliances'
import Accessories from './components/Categories/Accessories'
import Card from './components/utilities/Card'
import { CartProvider } from './components/Store/cartContext'
import Cart from './components/Categories/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
    <div className='bg-gray-100'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="register" element={<SignUpEmailForm/>}/>
          <Route path='login' element={<LoginForm/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path='clothing' element={<Clothing/>}/>
          <Route path='electronics' element={<Electronics/>}/>
          <Route path='appliances' element={<Appliances/>}/>
          <Route path='accessories' element={<Accessories/>}/>
          <Route path='product' element={<Card/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </CartProvider>
  )
}

export default App
