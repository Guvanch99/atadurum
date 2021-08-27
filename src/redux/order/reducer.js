import { ORDER } from './type'

const initialState = {
  userOrder: {}
}

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER:
      return { ...state, ...payload }

    default:
      return state
  }
}
