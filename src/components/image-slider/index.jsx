import { useState } from 'react'

import { DATA } from '../../data'

import './index.scss'

const { images } = DATA

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <div className="slider">
      {images.map(({ url, text }, index) => {
        return (
          index === current && (
            <img key={index} className="image" src={url} alt={text} />
          )
        )
      })}
      <i onClick={prevImage} className="fas fa-arrow-left left-arrow" />
      <i onClick={nextImage} className="fas fa-arrow-right right-arrow" />
    </div>
  )
}

export default ImageSlider
