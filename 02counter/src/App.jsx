import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);
  
  // let counter = 10;

  const addValue = () => {
    if(counter < 20){
    // counter += 1
    setCounter(counter + 1)  //can update const value in 
    // setCounter(counter)
    // console.log("clicked", counter);
    }
    
  }

  const subValue = () => {
    if(counter > 0){
   
    setCounter(counter - 1)
    }
  }
  return (
    <>
   <h1>chai aur react</h1>
   <h2>counter value {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={subValue}>Subtract Value {counter}</button>

    <p>footer: {counter}</p>
    </>
  )
}

export default App
