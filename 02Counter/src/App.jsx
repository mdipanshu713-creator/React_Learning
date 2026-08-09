import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';

function App() {


  const [count, setCount] = useState(15)

// const → declares variables.
// [count, setCount] → array destructuring.
// count → current state value.
// setCount → function to update the state. or reference  point we change the name 
// useState(0) → creates state with initial value 0.
  // let counter = 15

  const addvalue = () => {
    console.log("clicked",count);
    // counter = counter + 1
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)







    
  }


  const removeValue = () =>{
     setCount(count -1)
  }

// 2.55


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {count}</h2>

    <button 
    onClick={addvalue}>Add value</button>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App


// What is Hooks ? 
// "Hooks are special built-in React functions that let 
// functional components use state and other React features by simply calling them inside the component."



// Relation to React
// Real DOM = Actual webpage elements in the browser.
// Virtual DOM = React's lightweight copy of the Real DOM.