import { useSelector } from 'react-redux'

import { CartItems } from '..'
import { DATA } from '../../data'

import './index.scss'

const { tableNames } = DATA
const CartTable = () => {
  const { cart } = useSelector(state => state.cart)

  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          {tableNames.map((name, index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <CartItems key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  )
}

export default CartTable
