import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartTable, Payment, PageLink, CartGift } from '..'
import { clearCart, countTotal } from '../../redux/cart/actionCreators'

import './index.scss'

const CartContent = () => {
  const dispath = useDispatch()

  const { cart, gift } = useSelector(state => state.cart)

  const clearCartHandler = () => {
    dispath(clearCart())
  }
  console.log(cart)
  useEffect(() => {
    dispath(countTotal())
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart, dispath])

  return (
    <div className="cart-content">
      <CartTable />
      <hr />
      {gift ? <CartGift gift={gift} /> : null}
      <div className="link-container">
        <PageLink direction="menu" name="Continue shopping" />
        <button onClick={clearCartHandler} className="cart-content__clear">
          Clear
        </button>
      </div>
      <Payment />
    </div>
  )
}

export default CartContent
