import React from 'react'
import Button from './button'
import Basket from './Basket'

const AppCounter = () => {
  return (
    <section className='container'>
        <Basket basketName={"Basket-1"} basketCount={10} />
        <Button imageUrl={"https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg"} title={'this is left button'} />
        <Button imageUrl={'https://www.freeiconspng.com/thumbs/arrow-icon/big-right-arrow-icon-007979--icons-etc-16.png'} title={'this is right button'}/>
        <Basket basketName={"Basket-2"} basketCount={0} />
    </section>
  )
}

export default AppCounter
