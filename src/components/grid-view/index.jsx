import { Link } from 'react-router-dom'

import './index.scss'

const GridView = ({ products }) => (
  <div className="grid">
    {products.map(({ id, name, src, price }) => (
      <div key={id} className="grid__container">
        <img className="grid__image" src={src} alt={name} />
        <div className="grid__info">
          <h1 className="info_name">{name}</h1>
          <h3 className="info_price">Price:{price}rub</h3>
        </div>
        <Link className="product__buy_link" to={`/menu/${id}`}>
          <i className="fas fa-shopping-bag product__buy_icon" />
        </Link>
      </div>
    ))}
  </div>
)
export default GridView
