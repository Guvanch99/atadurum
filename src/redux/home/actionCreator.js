import { DB } from '../../core/axios'

import { GET_FEATURED_PRODUCTS } from './type'

const getGallery = payload => {
  return {
    type: GET_FEATURED_PRODUCTS,
    payload
  }
}
export const fetchGallery = () => {
  return dispatch => {
    DB('/featured-products').then(products =>
      dispatch(getGallery(products.data))
    )
  }
}
