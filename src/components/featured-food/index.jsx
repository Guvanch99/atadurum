import { memo } from 'react'
import { useSelector } from 'react-redux'

import { DATA } from '../../data'

import ArticleName from '../article-name'

import './index.scss'

const { mostLovedFoodImage } = DATA

const FeaturedFood = () => {
  const FeaturedFood = useSelector(state => state.home.featuredProducts)
  return (
    <>
      <ArticleName name="Most Loved Meals" />
      <div className="featured-product">
        <img
          className="featured-product__main-image"
          src={mostLovedFoodImage}
          alt="doner"
        />
        <ul className="featured-product__menu">
          {FeaturedFood.map(({ id, name, src, description, price }) => (
            <li className="featured-product__list" key={id}>
              <img className="featured-product__image" src={src} alt={name} />
              <div className="featured-product__container">
                <h1 className="featured-product__name">{name}</h1>
                <p className="featured-product__description">
                  {description.slice(0, 50)}
                </p>
                <p className="featured-product__price">Price :{price}rub</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default memo(FeaturedFood)
