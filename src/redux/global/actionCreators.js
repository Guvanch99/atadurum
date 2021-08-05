import { LOADING, LOADED } from './type'

export const loading = () => {
  return { type: LOADING }
}

export const loaded = () => {
  return { type: LOADED }
}
