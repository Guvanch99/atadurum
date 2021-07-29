import { DATA } from '../../data'

import './index.scss'

const { mostLovedFoodImage } = DATA

const FeaturedFood = () => (
  <div className="featured-product">
    <img
      className="featured-product__image"
      src={mostLovedFoodImage}
      alt="doner"
    />
    <ul></ul>
  </div>
)

export default FeaturedFood
