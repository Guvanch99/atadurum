import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../redux/cart/actionCreators'
import { AmountButtons } from '..'
import PageLink from '../page-link'

import './index.scss'

const AddToCart = ({ singleProduct }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const increase = () => {
    setAmount(prev => {
      let temp = ++prev
      return temp
    })
  }
  const decrease = () => {
    setAmount(prev => {
      let temp = --prev
      if (temp < 1) temp = 1
      return temp
    })
  }

  const addToCartProduct = () => {
    const payload = {
      amount,
      singleProduct
    }
    dispatch(addToCart(payload))
  }
  return (
    <div className="add-cart__container">
      <AmountButtons decrease={decrease} increase={increase} amount={amount} />
      <PageLink
        direction="cart"
        name="To Cart"
        eventHandler={addToCartProduct}
      />
    </div>
  )
}

export default AddToCart
