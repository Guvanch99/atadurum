import { cartReducer } from './reducer'
import {
  clearOrder,
  countTotal,
  userPromocodeUsed,
  clearCart,
  getPresent,
  addToCart
} from './actionCreators'

const state = {
  cart: [],
  gift: null,
  promocodeUsed: false,
  totalAmount: 0,
  totalItems: 0
}

let reducer = action => cartReducer(state, action)

describe('cart reducer tree', () => {
  it('clear all products', () => {
    let { cart, gift } = reducer(clearOrder())
    expect.assertions(5)
    expect(cart).toEqual([])
    expect(cart).not.toBeNull()
    expect(cart).not.toBeUndefined()
    expect(gift).toBeNull()
    expect(gift).not.toBeUndefined()
  })
  it('clear just cart', () => {
    let { cart } = reducer(clearCart())
    expect.assertions(3)
    expect(cart).toEqual([])
    expect(cart).not.toBeNull()
    expect(cart).not.toBeUndefined()
  })
  it('user promoce used', () => {
    let newState = reducer(userPromocodeUsed())
    expect.assertions(1)
    expect(newState.promocodeUsed).toBe(true)
  })
  it('get present for user', () => {
    let giftForUser = {
      id: 1,
      name: 'Durum',
      src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
      amount: 1,
      price: 0,
      description: 'description description',
      type: 'Durum'
    }
    let { gift } = reducer(getPresent(giftForUser))
    expect.assertions(4)
    expect(gift && typeof gift === 'object').toBe(true)
    expect(gift).not.toBeNull()
    expect(gift).not.toBeUndefined()
    expect(gift).toHaveProperty(
      'id',
      'name',
      'src',
      'amount',
      'price',
      'description',
      'type'
    )
  })
  it('count  price and item count', () => {
    let { totalAmount, totalItems } = reducer(countTotal())
    expect(typeof totalAmount).toBe('number')
    expect(totalAmount).toBeGreaterThanOrEqual(0)
    expect(totalAmount).not.toBeNull()
    expect(totalAmount).not.toBeUndefined()
    expect(typeof totalItems).toBe('number')
    expect(totalItems).toBeGreaterThanOrEqual(0)
    expect(totalItems).not.toBeNull()
    expect(totalItems).not.toBeUndefined()
  })
  /*it('adding product to cart', () => {
    let product = {
      id: 3,
      name: 'Durum',
      src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
      price: 10,
      description: 'description about product',
      amount: 1,
      type: 'Durum',
      subTotal: 10
    }
    let { cart } = reducer(addToCart(product))
    expect.assertions(4)
    expect(cart && typeof cart === 'object').toBe(true)
    expect(cart).not.toBeNull()
    expect(cart).not.toBeUndefined()
    expect(cart).toHaveProperty(
      'id',
      'name',
      'src',
      'amount',
      'price',
      'description',
      'type',
      'subTotal'
    )
  })*/
})
