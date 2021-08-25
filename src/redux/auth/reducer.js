import { SET_USER, USER_LOGOUT } from './type'

const initialState = {
  user: null
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      console.log(payload)
      return { ...state, user: payload }
    case USER_LOGOUT:
      return { ...state, user: null }
    default:
      return state
  }
}
