import { ADD_TO_CART, CLEAR_CART, REMOVE_PRODUCT } from './type'

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
export const ClearCart = () => {
  return {
    type: CLEAR_CART
  }
}
