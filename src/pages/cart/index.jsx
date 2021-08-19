import { useSelector } from 'react-redux'

import { CartContent, PageLink } from '../../components'

import './index.scss'

const Cart = () => {
  const { cart } = useSelector(state => state.cart)
  console.log('cartPge', cart)
  return (
    <div className="cart">
      {cart.length <= 0 ? (
        <PageLink direction="menu" name="Add meal to basket" />
      ) : (
        <CartContent />
      )}
    </div>
  )
}

export default Cart
