import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Componets/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"Diapnshu",
    age:24
  }
  let newArr = [1,2,3]
  return (
    <>
<h1 className="bg-black text-white text-4xl font-bold p-4 text-center">
        Hello World 🚀
      </h1>
<Card username = "chaiaurcode" btnText = "click me"/>
    </>
  )
}

export default App
