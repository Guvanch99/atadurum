import { DB } from '../../core/axios'
import { loaded, loading } from '../global/actionCreators'
import { GET_PRESENT } from './type'

const getGift = payload => {
  return {
    type: GET_PRESENT,
    payload
  }
}

export const getPresent = id => async dispatch => {
  dispatch(loading())
  await DB(`/all-products?id=${id}`).then(({ data }) => {
    dispatch(getGift(data[0]))
  })

  dispatch(loaded())
}
