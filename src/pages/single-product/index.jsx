import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Spinner, Product, PageHero } from '../../components'
import { fetchSingleProduct } from '../../redux/single-product/actionCreator'

import './index.scss'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const { singleProduct } = useSelector(state => state.singleProduct)
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [dispatch, id])

  return (
    <>
      {!singleProduct ? (
        <Spinner />
      ) : (
        <div className="single-product">
          <PageHero menu title="Single-Product" />
          <Product singleProduct={singleProduct} />
        </div>
      )}
    </>
  )
}

export default SingleProduct
