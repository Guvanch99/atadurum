import { memo } from 'react'
import { PageLink } from '..'

import './index.scss'

const ListView = ({ products }) => (
  <div className="list">
    {products.map(({ id, name, src, description, price }) => (
      <div key={id} className="list__container">
        <img className="list__image" src={src} alt={name} />
        <div className="list__info">
          <h1 className="food__name">{name}</h1>
          <h3 className="food__price">Price {price} rub</h3>
          <p className="food__description">{description}</p>
          <PageLink
            name="Cart"
            direction={`menu/${id}`}
            customStyle="list__link"
          />
        </div>
      </div>
    ))}
  </div>
)

export default memo(ListView)
