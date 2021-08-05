import { useSelector } from 'react-redux'

import { ListView, GridView } from '..'

import './index.scss'

const ProductsList = ({ view }) => {
  const allProducts = useSelector(state => state.menu.filteredProducts)

  return (
    <div>
      {view ? (
        <ListView products={allProducts} />
      ) : (
        <GridView products={allProducts} />
      )}
    </div>
  )
}

export default ProductsList
