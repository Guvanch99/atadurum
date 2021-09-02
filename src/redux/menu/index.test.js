import { menuReducer } from './reducer'
import { getAllProducts, filterProducts } from './actionCreators'

const state = {
  allProducts: [],
  filteredProducts: []
}

let reducer = action => menuReducer(state, action)
describe('cart working tree', () => {
  it('get all products', () => {
    let allProductsData = [
      {
        id: 1,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      },
      {
        id: 2,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      },
      {
        id: 3,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      }
    ]
    let { allProducts } = reducer(getAllProducts(allProductsData))
    expect(allProducts).not.toEqual([])
    expect(allProducts).not.toBeNull()
    expect(allProducts).not.toBeUndefined()
    expect(allProducts.length).toBeGreaterThanOrEqual(3)
    allProducts.forEach(product => {
      expect(product && typeof product === 'object').toBe(true)
      expect(product).toHaveProperty(
        'id',
        'name',
        'src',
        'price',
        'description'
      )
    })
  })
  /* it('filtered products', () => {
    let filteredProductsData = [
      {
        id: 1,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      },
      {
        id: 2,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      },
      {
        id: 3,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      },
      {
        id: 4,
        name: 'Durum',
        src: 'https://i.ibb.co/vhs7GF2/kombo-cow.jpg',
        price: 10,
        description: 'description about product'
      }
    ]
    let { filteredProducts } = reducer(filterProducts())
    expect(filteredProducts).not.toEqual([])
    expect(filteredProducts).not.toBeNull()
    expect(filteredProducts).not.toBeUndefined()
    expect(filteredProducts.length).toBeGreaterThanOrEqual(3)
    filterProducts.forEach(product => {
      expect(product).toHaveProperty(
        'id',
        'name',
        'src',
        'price',
        'description'
      )
    })
  })*/
})
