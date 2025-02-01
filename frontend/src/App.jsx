import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmailForm from './components/EmailForm'
import RegisterFrom from './components/RegisterFrom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterFrom/>
    </>
  )
}

export default App
