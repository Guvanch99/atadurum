import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './index.scss'
import { CartItems } from '../../components'

const Cart = () => {
  const { cart } = useSelector(state => state.cart)
  return (
    <div>
      {cart.length <= 0 ? (
        <Link to="/menu" className="cart__link">
          Add menu to basket
        </Link>
      ) : (
        <CartItems />
      )}
    </div>
  )
}

export default Cart
