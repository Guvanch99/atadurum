import {
  SET_USER,
  LOGOUT,
  USER_EXIST,
  USER_NOT_FOUND,
  LOGIN_USER,
  TURNOFF_ERROR_AUTH
} from './type'

const initialState = {
  user: null,
  userExist: false,
  userNotFound: false
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload }
    case USER_EXIST:
      return { ...state, userExist: true }
    case USER_NOT_FOUND:
      return { ...state, userNotFound: true }
    case LOGIN_USER: {
      return { ...state, user: payload }
    }
    case LOGOUT:
      return { ...state, user: null }
    case TURNOFF_ERROR_AUTH:
      return { ...state, userExist: false, userNotFound: false }
    default:
      return state
  }
}
