import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { removeProduct, toggleAmount } from '../../redux/cart/actionCreators'
import { AmountButtons } from '..'

import './index.scss'

const CartItems = ({ id, src, name, amount, price, subTotal }) => {
  const { t } = useTranslation('translation')

  const dispatch = useDispatch()

  const removeProductHandler = id => {
    dispatch(removeProduct(id))
  }
  const increase = useCallback(
    () => dispatch(toggleAmount({ id, inc: 'inc' })),
    [dispatch, id]
  )

  const decrease = useCallback(
    () => dispatch(toggleAmount({ id, dec: 'dec' })),
    [dispatch, id]
  )
  console.log(id)
  return (
    <tr key={name} className="items-data">
      <td>
        <img className="items-data__image" alt={name} src={src} />
      </td>
      <td>
        <p className="items-data__name">{t(name)}</p>
      </td>
      <td>
        <AmountButtons
          styleTable={true}
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
CartItems.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired
}
export default CartItems
