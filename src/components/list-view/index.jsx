import { Link } from 'react-router-dom'

import './index.scss'

const ListView = ({ products }) => (
  <div className="list">
    {products.map(({ id, name, src, description, price }) => (
      <div key={id} className="list__container">
        <img className="list__image" src={src} alt={name} />
        <div className="list__info">
          <h1 className="info_name">{name}</h1>
          <h3 className="info_price">Price {price} rub</h3>
          <p className="info_description">{description}</p>
          <Link className="product__buy_button" to={`/menu/${id}`}>
            Buy
          </Link>
        </div>
      </div>
    ))}
  </div>
)

export default ListView
