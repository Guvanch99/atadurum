import { useSelector } from 'react-redux'

import { PageLink } from '..'

import './index.scss'

const Payment = () => {
  const { totalAmount } = useSelector(state => state.cart)
  return (
    <div className="payment">
      <h2 className="payment__subtotal">Subtotal:{totalAmount}</h2>
      <p className="payment__shipping">Shipping fee:2.5rub</p>
      <hr />
      <h1 className="payment__total">Order Total:{totalAmount + 2.5}</h1>

      <PageLink name="Go to checkout" direction="checkout" />
    </div>
  )
}

export default Payment
