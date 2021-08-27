import { SET_USER, USER_LOGOUT, USER_EXIST } from './type'

const initialState = {
  user: null,
  userExist: false,
  userNotExist: false
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload }
    case USER_EXIST:
      return { ...state, userExist: true }

    case USER_LOGOUT:
      return { ...state, user: null }
    default:
      return state
  }
}
