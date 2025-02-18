import React from 'react'
import './Comp.css'
const Comp = (props) => {
  return (
    <div id='cont'>
      <h2>Orewa {props.name}</h2>
      <br/>
      <h2>I am {props.Age}</h2> 
      <br/>
      <h2>Soul Mate:{props.friendname}</h2> 
      <br/>
      <h2>He is {props.friendage}</h2>
      <br/>

    </div>
  )
}

export default Comp