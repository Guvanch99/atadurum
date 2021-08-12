import { combineReducers } from 'redux'
import { homeReducer } from './home/reducer'
import { menuReducer } from './menu/reducer'
import { singleProductReducer } from './single-product/reducer'
import { globalReducer } from './global/reducer'
import { cartReducer } from './cart/reducer'
import { promotionsReducer } from './promotions/reducer'
export const rootReducer = combineReducers({
  home: homeReducer,
  menu: menuReducer,
  singleProduct: singleProductReducer,
  global: globalReducer,
  cart: cartReducer,
  promotions: promotionsReducer
})
