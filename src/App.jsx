import React from 'react';
import './App.css'
import Comp from './Comp'
function App() {
 
  const myinfo={
    name:"SUJAN P",
    age:19,
  };


  console.log("age="+myinfo.age);

  
  return (
    
    <div>  
      <h2>Name:{myinfo.name}</h2>
      <div id='click'>
        <button onClick={()=>alert("My name is SUJAN")}>click</button>
        <button onDoubleClick={()=>alert("My friend name is NARUTO")}>Doubleclick</button>
      </div>
      
      <div id='container'>
        <Comp  name="SUJAN P" Age="19" friendname="NARUTO" friendage="18"/>
      </div>
    
   
     </div> 
  );
}

export default App
