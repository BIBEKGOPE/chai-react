import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(11)
  
  //let counter=15
  const addValue=()=>{//arrow function vale added using direct method es6
   if(counter<20){
    setCounter(counter+1)
   }
  };
  
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <button
     onClick={addValue}
     >add value:{counter}</button>
     <br />
     <button
     onClick={removeValue}
     >remove value :{counter}</button>
    </>
  )
}

export default App
