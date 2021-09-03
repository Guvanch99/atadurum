import { DB } from '../../core/axios'

import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_PRODUCT,
  TOGGLE_CART_PRODUCT_AMOUNT,
  GET_PRESENT,
  CLEAR_ORDER,
  PROMOCODE_USED
} from './type'

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
})
export const removeProduct = payload => ({
  type: REMOVE_PRODUCT,
  payload
})
export const clearCart = () => ({
  type: CLEAR_CART
})
export const countTotal = () => ({
  type: COUNT_CART_TOTALS
})
export const toggleAmount = payload => ({
  type: TOGGLE_CART_PRODUCT_AMOUNT,
  payload
})

export const clearOrder = () => ({ type: CLEAR_ORDER })

export const getPresent = payload => ({
  type: GET_PRESENT,
  payload
})
export const userPromocodeUsed = () => ({ type: PROMOCODE_USED })

export const getPresentPromo = id => dispatch =>
  DB(`/all-products?id=${id}`).then(({ data }) => {
    const { id, name, src, description, type } = data[0]
    const payload = {
      id,
      name,
      src,
      amount: 1,
      price: 0,
      description,
      type
    }
    dispatch(getPresent(payload))
    dispatch(userPromocodeUsed())
    dispatch(countTotal())
  })
