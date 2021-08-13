import { GET_PRESENT } from './type'

const initialState = {
  present: null
}

export const promotionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRESENT:
      const { id, name, src } = payload
      const gift = {
        id,
        name,
        src,
        amount: 1,
        price: 0
      }
      return { ...state, present: gift }

    default:
      return state
  }
}
