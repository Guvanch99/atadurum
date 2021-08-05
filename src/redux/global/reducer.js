import { LOADING, LOADED } from './type'

const initialState = {
  Load: false
}

export const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      console.log('reducer fires', type)
      return { ...state, Load: true }
    case LOADED:
      return { ...state, Load: false }
    default:
      return state
  }
}
