import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Spinner, Product, PageHero } from '../../components'
import { fetchSingleProduct } from '../../redux/single-product/actionCreator'

import './index.scss'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const {
    global: { Load },
    singleProduct: { singleProduct }
  } = useSelector(state => state)
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [dispatch, id])

  return (
    <>
      {Load ? (
        <Spinner />
      ) : (
        <div className="single-product">
          <PageHero menu title="Single-Product" />
          {singleProduct ? <Product singleProduct={singleProduct} /> : null}
        </div>
      )}
    </>
  )
}

export default SingleProduct
