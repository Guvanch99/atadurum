import {
  SET_USER,
  LOGIN_USER,
  USER_NOT_FOUND,
  LOGOUT,
  USER_EXIST
} from './type'
import { DB } from '../../core/axios'
import { ROUTER_HOME } from '../../constants'

export const signUp = payload => ({
  type: SET_USER,
  payload
})
export const login = payload => ({
  type: LOGIN_USER,
  payload
})
export const isUserExist = () => ({
  type: USER_EXIST
})

export const logOut = () => ({
  type: LOGOUT
})

export const userNotFound = () => ({ type: USER_NOT_FOUND })

export const createUser = (user, location, history) => async dispatch => {
  const { data: searchedUser } = await DB(
    `/users?userName=${user.userName}&email{${user.email}}`
  )
  if (searchedUser.length) {
    dispatch(isUserExist())
  } else {
    const { data } = await DB.post('/users', user)
    dispatch(signUp(data))
    location.state !== null && location.state.from === '/login'
      ? history.push(ROUTER_HOME)
      : history.goBack()
  }
}

export const loginUser =
  (userName, password, location, history) => async dispatch => {
    const { data: user } = await DB(
      `/users?userName=${userName}&password=${password}`
    )
    if (user.length > 0) {
      dispatch(login(user[0]))
      location.state !== null && location.state.from === '/sign-up'
        ? history.push(ROUTER_HOME)
        : history.goBack()
    } else {
      dispatch(userNotFound())
    }
  }
