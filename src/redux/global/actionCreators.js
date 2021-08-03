import { LOADING, LOADED } from './type'

export const Loading = () => {
  return { type: LOADING }
}

export const Loaded = () => {
  return { type: LOADED }
}
