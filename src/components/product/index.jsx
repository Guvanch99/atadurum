import './index.scss'

const Product = ({ src, name, description, type, price }) => {
  return (
    <div className="product">
      <img className="product__image" src={src} alt={name} />
      <div className="product__info">
        <h1 className="product__name">{name.toUpperCase()}</h1>
        <h3 className="product__price">Price {price} rub</h3>
        <h4 className="product__type"> Product type:{type}</h4>
        <p className="product__description">{description}</p>
      </div>
    </div>
  )
}

export default Product
