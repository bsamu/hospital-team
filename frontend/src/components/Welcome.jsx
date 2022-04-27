import React, { useState } from 'react'
import '../index.css';

function Welcome() {
  let a = null;
  const [isShown, setIsShown] = useState(false)
  return (
    <div className="welcome">
      <button onClick={() => setIsShown(!isShown)}>toggle</button>
      {
        isShown && <p>{a.b.c}</p>
      }
        <h1> Welcome in Hospital Order Center! </h1> 
        <h2> We are here to help! </h2> 
        <h3> Please register or login! </h3> 
    </div>
  )
}

export default Welcome