import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../redux/cart/actionCreators'
import AmountButtons from './internal/amount-buttons'

import './index.scss'

const AddToCart = ({ singleProduct }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const increase = () => {
    setAmount(prev => {
      let temp = prev + 1
      if (temp > 50) temp = 50
      return temp
    })
  }
  const descrease = () => {
    setAmount(prev => {
      let temp = prev - 1
      if (temp < 1) temp = 1
      return temp
    })
  }
  const addtoCartProduct = () => {
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
      <Link className="add-cart__link" onClick={addtoCartProduct} to="/cart">
        To Cart
      </Link>
    </div>
  )
}

export default AddToCart
