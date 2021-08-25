import { combineReducers } from 'redux'
import { homeReducer } from './home/reducer'
import { menuReducer } from './menu/reducer'
import { singleProductReducer } from './single-product/reducer'
import { cartReducer } from './cart/reducer'
import { authReducer } from './auth/reducer'
export const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  menu: menuReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer
})
