const Card = ({ id, icon, text }) => (
  <div className="card" key={id}>
    <i className={`${icon} card__icon `} />
    <h2 className="card__text">{text}</h2>
  </div>
)

export default Card
