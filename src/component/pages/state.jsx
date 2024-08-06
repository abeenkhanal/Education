import React, { useState } from 'react'

const State = () => {
    const [a,seta] =useState (0)

  return (
    <div>
      <button onClick={()=>{
        seta (a+1)
      }}>Add</button>
      <div>
        {a}
      </div>
      <button onClick={()=>{
        seta (a-1)
      }}>Subtract</button>
    </div>
  )
}

export default State
