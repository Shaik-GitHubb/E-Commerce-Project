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
import Order from './components/Categories/Order'
import CheckoutForm from './components/Categories/CheckoutForm'
import { AddressProvider } from './components/Store/addressContext'
import { AuthProvider } from './components/Store/authContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <CartProvider>
      
    <div className='bg-gray-100'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="register" element={<SignUpEmailForm/>}/>
          <Route path='login' element={<LoginForm/>}/>
          <Route path='clothing' element={<Clothing/>}/>
          <Route path='electronics' element={<Electronics/>}/>
          <Route path='groceries' element={<Appliances/>}/>
          <Route path='accessories' element={<Accessories/>}/>
          <Route path='product' element={<Card/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="payment" element={<CheckoutForm/>}/>
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </CartProvider>
    </AuthProvider>
  )
}

export default App
