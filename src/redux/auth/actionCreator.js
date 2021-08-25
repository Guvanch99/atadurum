import { SET_USER } from './type'
import { DB } from '../../core/axios'

export const SignUp = payload => ({
  type: SET_USER,
  payload
})

export const createUser = user => async dispatch => {
  const { data: searchedUser } = await DB(`/users?email=${user.email}`)
  // TODO throw error if user exists
  if (searchedUser.length) return
  const { data } = await DB.post('/users', user)
  dispatch(SignUp(data))
}
