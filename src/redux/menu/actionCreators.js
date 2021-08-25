import { GET_ALL_PRODUCTS, ON_CHANGE, FILTER_PRODUCTS } from './type'
import { DB } from '../../core/axios'

const getAllProducts = payload => ({
  type: GET_ALL_PRODUCTS,
  payload
})
export const onChangeHandler = payload => ({
  type: ON_CHANGE,
  payload
})
export const filterProducts = () => ({
  type: FILTER_PRODUCTS
})
export const fetchAllProducts = () => dispatch => {
  DB('/all-products').then(products => dispatch(getAllProducts(products.data)))
}
