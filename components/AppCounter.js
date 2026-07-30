import React from 'react'
import Button from './button'
import Basket from './Basket'
import {createRoot} from 'react-dom/client'

// const root = createRoot(document.querySelector('#root'));
// console.log("root")

let leftApplesCount = 10;
let rightApplesCount = 0;

const AppCounter = ({root}) => {

const leftButtonHandler = () => {
  // console.log('left button clicked')
  if (rightApplesCount > 0) {
    rightApplesCount--;
    leftApplesCount++;
    root.render(<AppCounter root={root} />);
  }
}

const rightButtonHandler = () => {
  // console.log('right button clicked')
  if (leftApplesCount > 0) {
    leftApplesCount--;
    rightApplesCount++;
    root.render(<AppCounter root={root} />);
  }
}

  return (
    <section className='container'>
        <Basket basketName={"Basket-1"} basketCount={leftApplesCount} />
        <Button imageUrl={"https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg"} title={'left Arrow'} clickEventHandler={leftButtonHandler}/>
        <Button imageUrl={'https://www.freeiconspng.com/thumbs/arrow-icon/big-right-arrow-icon-007979--icons-etc-16.png'} title={'right Arrow'} clickEventHandler={rightButtonHandler}/>
        <Basket basketName={"Basket-2"} basketCount={rightApplesCount} />
    </section>
  )
}
// root.render(<AppCounter />);

export default AppCounter
