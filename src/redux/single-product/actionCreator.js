import { DB } from '../../core/axios'
import { loading, loaded } from '../global/actionCreators'
import { GET_SINGLE_PRODUCT } from './type'

export const getSingleProduct = payload => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload
  }
}
export const fetchSingleProduct = id => async dispatch => {
  dispatch(loading())
  await DB(`/all-products?id=${id}`).then(({ data }) =>
    dispatch(getSingleProduct(data[0]))
  )
  dispatch(loaded())
}
