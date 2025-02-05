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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="register" element={<SignUpEmailForm/>}/>
          <Route path='login' element={<LoginForm/>}/>
          <Route path="home" element={<Home/>}/>
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
