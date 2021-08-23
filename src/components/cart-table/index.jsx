import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CartItems } from '..'
import { DATA } from '../../data'

import './index.scss'

const { tableNameKeys } = DATA

const CartTable = () => {
  const { t } = useTranslation('translation')
  const { cart } = useSelector(state => state.cart)

  let tableHeadRows = tableNameKeys.map(key => (
    <th key={key}>{t(`cartTable.${key}`)}</th>
  ))

  let tableBody = cart.map(item => <CartItems key={item.id} {...item} />)

  return (
    <table className="table">
      <thead className="table__header">
        <tr>{tableHeadRows}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  )
}

export default CartTable
