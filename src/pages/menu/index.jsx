import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllProducts } from '../../redux/menu/actionCreators'

import {
  Sort,
  ProductsList,
  Spinner,
  PageHero,
  ArticleName
} from '../../components'

import './index.scss'

const Menu = () => {
  const [view, setView] = useState(true)
  const dispatch = useDispatch()

  const { allProducts } = useSelector(state => state.menu)
  const viewHandler = () => setView(!view)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      {!allProducts ? (
        <Spinner />
      ) : (
        <div>
          <PageHero title="Menu" />
          <ArticleName name="Menu" />
          <div>
            <Sort view={view} viewHandler={viewHandler} />
            <ProductsList view={view} />
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
