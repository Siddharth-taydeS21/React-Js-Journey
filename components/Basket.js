import React from 'react'

const Basket = ({basketName, basketCount}) => {
  return (
    <div>
        <h1>{basketName}</h1>
        <span>{basketCount} Apples</span>
    </div>
  )
}

export default Basket
