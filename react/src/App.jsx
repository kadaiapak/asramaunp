import { useState } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
