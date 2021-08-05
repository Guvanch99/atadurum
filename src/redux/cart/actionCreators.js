import { ADD_TO_CART, CLEAR_CART, REMOVE_PRODUCT } from './type'

const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
}
const removeProduct = payload => {
  return {
    type: REMOVE_PRODUCT,
    payload
  }
}
const ClearCart = () => {
  return {
    type: CLEAR_CART
  }
}
