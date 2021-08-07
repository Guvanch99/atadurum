import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { Spinner, Product } from '../../components'
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
          <Link className="single-product__link" to="/menu">
            GO Back
          </Link>
          {singleProduct ? <Product singleProduct={singleProduct} /> : null}
        </div>
      )}
    </>
  )
}

export default SingleProduct
