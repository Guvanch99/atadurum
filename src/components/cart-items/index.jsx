import { useSelector } from 'react-redux'

import './index.scss'

const CartItems = () => {
  const { cart } = useSelector(state => state.cart)
  console.log(cart)
  return (
    <div className="items-data">
      {cart.map(({ id, name, price, amount, src }) => (
        <>
          <h1>{name}</h1>
          <h3>{id}</h3>
          <p>{price}</p>
          <p>{amount}</p>
          <img alt={name} src={src} />
        </>
      ))}
    </div>
  )
}

export default CartItems
