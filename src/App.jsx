import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Telwind</h1>
      <Card userName="Sandeep" btnText="Click Me"/>
      <Card userName="Deep" btnText=""/>
      <Card userName="Deep" btnText=""/>
    </>
  )
}

export default App
