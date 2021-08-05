import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_PRODUCT,
  TOGGLE_CART_PRODUCT_AMOUNT
} from './type'

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 2
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, ...payload }
    case CLEAR_CART:
      return { ...state, ...payload }
    case REMOVE_PRODUCT:
      return { ...state, ...payload }
    case COUNT_CART_TOTALS:
      return { ...state, ...payload }
    case TOGGLE_CART_PRODUCT_AMOUNT:
      return { ...state, ...payload }
    default:
      return state
  }
}
