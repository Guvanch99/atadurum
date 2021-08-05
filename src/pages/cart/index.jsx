import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './index.scss'
import { CartItems } from '../../components'

const Cart = () => {
  const { total_items } = useSelector(state => state)
  return (
    <div>
      {total_items <= 0 ? (
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
