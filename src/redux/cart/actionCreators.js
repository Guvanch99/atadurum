import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_PRODUCT
} from './type'

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
}
export const removeProduct = payload => {
  return {
    type: REMOVE_PRODUCT,
    payload
  }
}
export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}
export const countTotal = () => {
  return {
    type: COUNT_CART_TOTALS
  }
}
