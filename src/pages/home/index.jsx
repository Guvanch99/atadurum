import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGallery } from '../../redux/home/actionCreator'

import { FeaturedFood, ImageSlider, Motto, Contacts } from '../../components'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGallery())
  }, [dispatch])
  return (
    <>
      <ImageSlider />
      <Motto />
      <FeaturedFood />
      <Contacts />
    </>
  )
}

export default Home
