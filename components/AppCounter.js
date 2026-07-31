import React, { useState } from 'react'
import Button from './button'
import Basket from './Basket'

// ======== importing styles only for this component
import styles from './AppCounter.module.css'

const AppCounter = () => {
  const [leftAppleCount, setLeftAppleCount] = useState(10);
  const [rightAppleCount, setRightAppleCount] = useState(0);

  const leftButtonHandler = () => {
    // console.log('left button clicked')
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1)
      setLeftAppleCount(leftAppleCount + 1)
    }
  }

  const rightButtonHandler = () => {
    // console.log('right button clicked')
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1)
      setRightAppleCount(rightAppleCount + 1)
    }
  }

  return (
    <section className={styles.AppContainer}>
      <Basket basketName={"Basket-1"} basketCount={leftAppleCount} children={'Apples'} />
      <Button
        imageUrl={"https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg"}
        title={'left Arrow'}
        clickEventHandler={leftButtonHandler} />
      <Button
        imageUrl={'https://www.freeiconspng.com/thumbs/arrow-icon/big-right-arrow-icon-007979--icons-etc-16.png'}
        title={'right Arrow'}
        clickEventHandler={rightButtonHandler} />
      <Basket basketName={"Basket-2"} basketCount={rightAppleCount} />
    </section>
  )
}
// root.render(<AppCounter />);

export default AppCounter
