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
      const {
        amount,
        singleProduct: { id, price, name, src }
      } = payload

      const temp = state.cart.find(i => i.id === id)
      if (temp) {
        return temp
      } else {
        const newProduct = {
          id,
          name,
          price,
          amount,
          src,
          type
        }
        return { ...state, cart: [...state.cart, newProduct] }
      }
    case CLEAR_CART:
      return { ...state, cart: [] }
    case REMOVE_PRODUCT:
      const filteredProduct = state.cart.filter(
        product => product.id !== payload.id
      )

      return { ...state, card: filteredProduct }
    case COUNT_CART_TOTALS:
      return { ...state, ...payload }
    case TOGGLE_CART_PRODUCT_AMOUNT:
      return { ...state, ...payload }
    default:
      return state
  }
}
