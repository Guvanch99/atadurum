import { LOADING, LOADED } from './type'

const initialState = {
  Load: false
}

export const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, Load: true }
    case LOADED:
      return { ...state, Load: false }
    default:
      return state
  }
}
