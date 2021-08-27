import { DB } from '../../core/axios'
import { CLEAR_CART } from '../cart/type'

const clearLocalStorage = () => ({ type: CLEAR_CART })

export const order = (orderData, history) => async dispatch => {
  await DB.post('/order', orderData)
  dispatch(clearLocalStorage())
}
