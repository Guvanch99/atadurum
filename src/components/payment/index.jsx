import { Link } from 'react-router-dom'

import './index.scss'

const Payment = () => (
  <div className="payment">
    <h2 className="payment__subtotal">Subtotal:0</h2>
    <p className="payment__shipping">Shipping fee:2.5rub</p>
    <hr />
    <h1 className="payment__total">Order Total:0</h1>
    <Link to="/checkout" className="cart__link">
      Go to checkout
    </Link>
  </div>
)

export default Payment
