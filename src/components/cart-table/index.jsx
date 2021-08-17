import { useSelector } from 'react-redux'

import { CartItems } from '..'

import './index.scss'

const CartTable = () => {
  const { cart, total_amount, total_items } = useSelector(state => state.cart)

  return (
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
      <tbody>
        {cart.map(item => (
          <CartItems
            key={item.id}
            {...item}
            total_amount={total_amount}
            total_items={total_items}
          />
        ))}
      </tbody>
    </table>
  )
}

export default CartTable
