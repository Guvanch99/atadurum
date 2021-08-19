import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  GET_FROM_LOCALE_STORAGE,
  REMOVE_PRODUCT,
  TOGGLE_CART_PRODUCT_AMOUNT,
  GET_PRESENT
} from './type'

const initialState = {
  cart: [],
  gift: null,
  totalAmount: 0
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
        let temp = state.cart.map(product => {
          if (product.id === id) {
            const newAmount = amount + product.amount
            let subTotal = Math.floor(newAmount * price)
            return { ...product, amount: newAmount, subTotal }
          } else {
            return product
          }
        })

        return { ...state, cart: temp }
      } else {
        const newProduct = {
          id,
          name,
          price,
          amount,
          src,
          type,
          subTotal: Math.floor(amount * price)
        }

        return { ...state, cart: [...state.cart, newProduct] }
      }

    case CLEAR_CART:
      return { ...state, cart: [] }

    case GET_FROM_LOCALE_STORAGE:
      const { cart, gift } = payload
      return { ...state, cart, gift }

    case REMOVE_PRODUCT:
      const filteredProduct = state.cart.filter(
        product => product.id !== payload
      )
      return { ...state, cart: filteredProduct }

    case COUNT_CART_TOTALS:
      let totalAmount = state.cart.reduce(
        (total, i) => (total += i.amount * i.price),
        0
      )
      return { ...state, totalAmount }

    case TOGGLE_CART_PRODUCT_AMOUNT:
      const { productId, dec, inc } = payload
      const tempCart = state.cart.map(item => {
        if (item.id === productId) {
          if (inc) {
            let newAmount = item.amount + 1

            let newSubTotal = item.price * newAmount

            return { ...item, amount: newAmount, subTotal: newSubTotal }
          }
          if (dec) {
            let newAmount = item.amount - 1

            if (newAmount < 1) {
              newAmount = 1
            }
            let newSubTotal = item.price * newAmount
            return { ...item, amount: newAmount, subTotal: newSubTotal }
          }
        }
      })
      return { ...state, cart: tempCart }
    case GET_PRESENT:
      return { ...state, gift: payload }
    default:
      return state
  }
}
