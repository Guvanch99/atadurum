import { memo } from 'react'

import './index.scss'

const CartGift = ({ gift }) => {
  const { name, src, amount, type } = gift
  return (
    <div className="cart-gift">
      <h1 className="cart-gift__label">Your Free Gift !!!</h1>
      <div className="cart-gift__container">
        <img src={src} alt={name} className="cart-gift__image" />
        <h1 className="cart-gift__name">
          Your Gift: <span className="cart-gift__name_color">{name}</span>
        </h1>
        <h1 className="cart-gift__amount">
          Amount:<span className="cart-gift__amount_color">{amount}</span>
        </h1>
        <h1 className="cart-gift__type">
          type:<span className=" cart-gift__type_color">{type}</span>
        </h1>
      </div>
    </div>
  )
}

export default memo(CartGift)
