import { DB } from '../../core/axios'

import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_PRODUCT,
  TOGGLE_CART_PRODUCT_AMOUNT,
  GET_FROM_LOCALE_STORAGE,
  GET_PRESENT
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
export const toggleAmount = payload => {
  return {
    type: TOGGLE_CART_PRODUCT_AMOUNT,
    payload
  }
}
export const getMenuFromLocaleStorage = payload => {
  return {
    type: GET_FROM_LOCALE_STORAGE,
    payload
  }
}

export const getPresent = payload => {
  return {
    type: GET_PRESENT,
    payload
  }
}
export const getPresentPromo = id => dispatch => {
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
    localStorage.setItem('gift', JSON.stringify(payload))
  })
}
