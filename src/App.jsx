import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() { 
  let name = "SUJAN"
  
  
  const mydetails={  
    name: "SUJAN",
    age: 18,
    dept: "M.Tech Computer Science And Engineering",
  }
  
  alert(`${mydetails.name}`)
  console.log(`Age is ${mydetails.age}`)
const sujan=()=>{
  console.log("I am from M.Tech CSE dept");
}

  return ( 
    
    <>
      <h1 style={{textAlign:"center"}}>{mydetails.dept}</h1>  {} 
      
      {
       }
      {}
      {}
      <p className='container'>Name: {mydetails.name}<br/>  {}
      
        Age: {mydetails.age}<br/>
        Department: {mydetails.dept}<br/>
      </p>
    
     <button onClick={sujan}>hi, I am here</button>
     <button onClick={()=>console.log("hiiiiiiii")}>KONNICHIWA</button>
    </>
  )
}

export default App

