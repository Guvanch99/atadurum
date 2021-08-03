import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFeaturedProducts } from '../../redux/home/actionCreator'
import { Loaded, Loading } from '../../redux/global/actionCreators'

import {
  FeaturedFood,
  ImageSlider,
  Motto,
  Contacts,
  Spinner
} from '../../components'

const Home = () => {
  const dispatch = useDispatch()
  const { Load } = useSelector(state => state.global)
  useEffect(() => {
    dispatch(Loading)
    dispatch(fetchFeaturedProducts())
    dispatch(Loaded)
  }, [dispatch])

  return (
    <>
      {Load ? (
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
