import { useState } from 'react'//This is a hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter = 5
 let [counter,setCounter] = useState(15)
 const addValue = ()=>{
  // counter = counter + 1 
  if(counter<20){
    // If we want to increase the value by 4 at once this is how you can do you cannot do directly like setCounter(counter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1) 
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
  }
 }

 const  removeValue = () =>{
  if(counter>0){
    setCounter(counter-1)
  }
 }

  return (
    <>
     <h1>Chai aur react</h1> 
     <h2> Counter value :{counter} </h2>
     <button 
     onClick={addValue}
     >Add value{counter}</button>
     <br />
     <button onClick={removeValue}>remove value{counter}</button>
     <p>footer:{counter}</p>
     </>
  )
}

export default App
