import { useDispatch } from 'react-redux'

import { removeProduct, toggleAmount } from '../../redux/cart/actionCreators'
import { AmountButtons } from '..'
import './index.scss'

const CartItems = ({ id, src, name, amount, price, subTotal }) => {
  const dispatch = useDispatch()

  const removeProductHandler = id => {
    dispatch(removeProduct(id))
  }
  const increase = () => dispatch(toggleAmount({ productId: id, inc: 'inc' }))

  const decrease = () => dispatch(toggleAmount({ productId: id, dec: 'dec' }))

  return (
    <tr key={name} className="items-data">
      <td>
        <img className="items-data__image" alt={name} src={src} />
      </td>
      <td>
        <p className="items-data__name">{name}</p>
      </td>
      <td>
        <AmountButtons
          styleTable="styleTable"
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </td>
      <td>
        <p className="items-data__price">{price}</p>
      </td>
      <td>
        <h3 className="items-data__id">{subTotal}</h3>
      </td>
      <td>
        <button
          className="items-data__remover"
          onClick={() => removeProductHandler(id)}
        >
          <i className="fas fa-times" />
        </button>
      </td>
    </tr>
  )
}

export default CartItems
