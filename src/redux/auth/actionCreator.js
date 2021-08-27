import { SET_USER, USER_EXIST } from './type'
import { DB } from '../../core/axios'

export const SignUp = payload => ({
  type: SET_USER,
  payload
})

export const isUserExist = () => ({
  type: USER_EXIST
})

export const createUser = (user, history) => async dispatch => {
  const { data: searchedUser } = await DB(`/users?email=${user.email}`)
  if (searchedUser.length) {
    dispatch(isUserExist())
  } else {
    const { data } = await DB.post('/users', user)
    localStorage.setItem('user', JSON.stringify(data))
    dispatch(SignUp(data))
    history.goBack()
  }
}
