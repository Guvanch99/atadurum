import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { ROUTER_CHECKOUT } from '../../constants'
import { PageLink } from '..'

import './index.scss'

const Payment = () => {
  const { t } = useTranslation('translation')
  const { totalAmount } = useSelector(state => state.cart)
  const shippingFee = 2.5
  let total = totalAmount + shippingFee

  return (
    <div className="payment">
      <h2 className="payment__subtotal">
        {t('payment.subTotal', { totalAmount })}
      </h2>
      <p className="payment__shipping"> {t('payment.shipping')}</p>
      <hr />
      <h1 className="payment__total"> {t('payment.orderTotal', { total })}</h1>

      <PageLink name={t('pageLink.goToCheckout')} direction={ROUTER_CHECKOUT} />
    </div>
  )
}

export default Payment
