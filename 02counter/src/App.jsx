import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

     let [counter, setCounter] = useState(12);
  //let counter = 12;
  const addValue = ()=> {
    console.log("clicked", counter);
    counter = counter+1;
    setCounter(counter);
  }
  const RemoveValue = ()=> {
    setCounter(counter-1);
  }

  return (
    <>
    <h1>Chai aor React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
