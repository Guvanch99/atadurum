import { DB } from '../../core/axios'
import { loading, loaded } from '../global/actionCreators'
import { GET_FEATURED_PRODUCTS } from './type'

const getFeaturedProducts = payload => {
  return {
    type: GET_FEATURED_PRODUCTS,
    payload
  }
}
export const fetchFeaturedProducts = () => async dispatch => {
  dispatch(loading)
  await DB('/featured-products').then(products =>
    dispatch(getFeaturedProducts(products.data))
  )
  dispatch(loaded)
}
