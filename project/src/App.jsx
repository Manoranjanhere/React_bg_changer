import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)
  const addvalue =()=>
  {
    if(counter<20)
    {
    setcounter(counter=>counter+1)
    setcounter(counter+1)
   
    }
  }
  const removevalue =()=>
  {
    if(counter>0)
    {
    setcounter(counter-1)
    }
  }
  return (
    <>
      <h1>Manoranjan</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
      onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
