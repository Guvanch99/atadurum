import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addToCart, countTotal } from '../../redux/cart/actionCreators'
import AmountButtons from './internal/amount-buttons'
import PageLink from '../page-link'

import './index.scss'

const AddToCart = ({ singleProduct }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const increase = () => {
    setAmount(prev => {
      let temp = ++prev
      if (temp > 50) temp = 50
      return temp
    })
  }
  const descrease = () => {
    setAmount(prev => {
      let temp = --prev
      if (temp < 1) temp = 1
      return temp
    })
  }
  useEffect(() => {
    console.log('fired')
    dispatch(countTotal())
  }, [dispatch, amount])
  const addToCartProduct = () => {
    const payload = {
      amount,
      singleProduct
    }
    dispatch(addToCart(payload))
  }
  return (
    <div className="add-cart__container">
      <AmountButtons
        descrease={descrease}
        increase={increase}
        amount={amount}
      />
      <PageLink
        direction="cart"
        name="To Cart"
        eventHandler={addToCartProduct}
      />
    </div>
  )
}

export default AddToCart
