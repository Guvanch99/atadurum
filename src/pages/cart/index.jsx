import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CartContent } from '../../components'

import './index.scss'

const Cart = () => {
  const { cart } = useSelector(state => state.cart)

  return (
    <div className="cart">
      {cart.length <= 0 ? (
        <Link to="/menu" className="cart__link">
          Add meal to basket
        </Link>
      ) : (
        <CartContent cart={cart} />
      )}
    </div>
  )
}

export default Cart
