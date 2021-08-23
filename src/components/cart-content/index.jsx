import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CartTable, Payment, PageLink, CartGift } from '..'
import { clearCart } from '../../redux/cart/actionCreators'
import { ROUTER_MENU } from '../../constants'

import './index.scss'

const CartContent = () => {
  const dispath = useDispatch()
  const { t } = useTranslation('translation')
  const { gift } = useSelector(state => state.cart)

  const clearCartHandler = () => {
    dispath(clearCart())
    localStorage.clear('cart')
  }

  return (
    <div className="cart-content">
      <CartTable />
      <hr />
      {gift ? <CartGift gift={gift} /> : null}

      <div className="link-container">
        <PageLink
          direction={ROUTER_MENU}
          name={t('pageLink.continueShopping')}
        />

        <button onClick={clearCartHandler} className="cart-content__clear">
          {t('clear')}
        </button>
      </div>
      <Payment />
    </div>
  )
}

export default CartContent
