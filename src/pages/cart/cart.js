import React from 'react'
import { Button } from 'antd-mobile'
import styles from './cart.css'

export default function Cart() {
  return (
    <>
      <Button color="primary" className={styles['cart-button']}>
        Primary
      </Button>
    </>
  )
}
