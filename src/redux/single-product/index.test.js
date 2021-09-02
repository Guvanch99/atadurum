import { getSingleProduct } from './actionCreator'
import { singleProductReducer } from './reducer'

it('get single product', () => {
  let action = getSingleProduct({
    id: 1,
    name: 'Durum',
    src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
    price: 10,
    description: 'description about product'
  })
  const state = {
    singleProduct: null
  }
  let { singleProduct } = singleProductReducer(state, action)
  expect.assertions(4)
  expect(singleProduct).not.toBeNull()
  expect(singleProduct).not.toBeUndefined()
  expect(singleProduct && typeof singleProduct === 'object').toBe(true)
  expect(singleProduct).toHaveProperty(
    'id',
    'name',
    'src',
    'price',
    'description'
  )
})
