import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-1">
          <button
          onClick={() => setColor("red")}
        className=" px-4 rounded-full text-white" style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={() => setColor("black")}
        className=" px-4 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>
          <button
          onClick={() => setColor("purple")}
        className=" px-4 rounded-full text-white" style={{backgroundColor:"purple"}}>purple</button>
          <button
          onClick={() => setColor("blue")}
        className=" px-4 rounded-full text-white" style={{backgroundColor:"blue"}}>Blue</button>
          <button
          onClick={() => setColor("green")}
        className=" px-4 rounded-full text-white" style={{backgroundColor:"green"}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App