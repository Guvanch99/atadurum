import { useDispatch } from 'react-redux'

import { CartTable, Payment, PageLink } from '..'
import { clearCart } from '../../redux/cart/actionCreators'

import './index.scss'

const CartContent = () => {
  const dispath = useDispatch()

  const clearCartHandler = () => {
    dispath(clearCart())
  }
  /*useEffect(() => {
    dispath(countTotal())
  }, [cart, dispath])*/
  return (
    <div className="cart-content">
      <CartTable />
      <hr />
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
