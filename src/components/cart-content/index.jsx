import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { CartItems, Payment } from '..'
import { clearCart, countTotal } from '../../redux/cart/actionCreators'

import './index.scss'

const CartContent = ({ cart }) => {
  const dispath = useDispatch()

  const clearCartHandler = () => {
    dispath(clearCart())
  }
  /*useEffect(() => {
    dispath(countTotal())
  }, [cart, dispath])*/
  return (
    <div className="cart-content">
      <table className="table">
        <thead className="table__header">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Price (rub)</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {cart.map(item => (
            <CartItems key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      <hr />
      <div className="link-container">
        <Link className="cart__link" to="/menu">
          Continue shopping
        </Link>
        <button onClick={clearCartHandler} className="cart-content__clear">
          Clear
        </button>
      </div>
      <Payment />
    </div>
  )
}

export default CartContent
