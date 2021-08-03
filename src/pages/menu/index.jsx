import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllProducts } from '../../redux/menu/actionCreators'
import { Loaded, Loading } from '../../redux/global/actionCreators'
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

  const { Load } = useSelector(state => state.global)
  const viewHandler = () => setView(!view)

  useEffect(() => {
    dispatch(Loading())
    dispatch(fetchAllProducts())
    dispatch(Loaded())
  }, [dispatch])

  return (
    <>
      {Load ? (
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
