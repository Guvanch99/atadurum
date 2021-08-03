import { DB } from '../../core/axios'

import { GET_FEATURED_PRODUCTS } from './type'

const getFeaturedProducts = payload => {
  return {
    type: GET_FEATURED_PRODUCTS,
    payload
  }
}

export const fetchFeaturedProducts = () => dispatch =>
  DB('/featured-products').then(products =>
    dispatch(getFeaturedProducts(products.data))
  )
