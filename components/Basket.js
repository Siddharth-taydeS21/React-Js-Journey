import React from 'react'

const Basket = ({basketName, basketCount}) =>{
  return (
    <div>
        <h1>{basketName}</h1>
        <span>{basketCount} Apples {basketCount === 0 && '(Empty)'} {basketCount === 10 && '(Full)'} </span>
    </div>
  )
}

export default Basket
