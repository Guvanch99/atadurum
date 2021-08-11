import { useDispatch } from 'react-redux'

import { removeProduct } from '../../redux/cart/actionCreators'

import './index.scss'

const CartItems = ({ id, src, name, amount, price }) => {
  const dispatch = useDispatch()
  const removeProductHandler = id => {
    dispatch(removeProduct(id))
  }
  return (
    <tr className="items-data">
      <td>
        <img className="items-data__image" alt={name} src={src} />
      </td>
      <td>
        <p className="items-data__name">{name}</p>
      </td>
      <td>
        <p className="items-data__amount">{amount}</p>
      </td>
      <td>
        <p className="items-data__price">{price}</p>
      </td>
      <td>
        <h3 className="items-data__id">0</h3>
      </td>
      <td>
        <button
          className="items-data__remover"
          onClick={() => removeProductHandler(id)}
        >
          X
        </button>
      </td>
    </tr>
  )
}

export default CartItems
