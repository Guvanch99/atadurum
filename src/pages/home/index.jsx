import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeaturedProducts } from '../../redux/home/actionCreator'
import { getMenuFromLocaleStorage } from '../../redux/cart/actionCreators'
import {
  FeaturedFood,
  ImageSlider,
  Motto,
  Contacts,
  Spinner
} from '../../components'
import { getFromLocaleStorage } from '../../services/helpers'

const Home = () => {
  const dispatch = useDispatch()
  const { featuredProducts } = useSelector(state => state.home)

  useEffect(() => {
    dispatch(fetchFeaturedProducts())
    const cart = getFromLocaleStorage('cart')
    const gift = getFromLocaleStorage('gift')
    dispatch(getMenuFromLocaleStorage({ cart, gift }))
  }, [dispatch])

  return (
    <>
      {!featuredProducts ? (
        <Spinner />
      ) : (
        <>
          <ImageSlider />
          <Motto />
          <FeaturedFood />
          <Contacts />
        </>
      )}
    </>
  )
}

export default Home
