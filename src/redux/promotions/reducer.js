import { GET_PRESENT } from './type'

const initialState = {
  present: null
}

export const promotionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRESENT:
      return { ...state, present: payload }

    default:
      return state
  }
}
