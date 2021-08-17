import { memo } from 'react'
import { useSelector } from 'react-redux'

import { PageLink } from '..'

import './index.scss'

const Payment = () => {
  const { total_amount } = useSelector(state => state.cart)
  return (
    <div className="payment">
      <h2 className="payment__subtotal">Subtotal:{total_amount}</h2>
      <p className="payment__shipping">Shipping fee:2.5rub</p>
      <hr />
      <h1 className="payment__total">Order Total:{total_amount + 2.5}</h1>
      <PageLink name="Go to checkout" direction="checkout" />
    </div>
  )
}

export default memo(Payment)
