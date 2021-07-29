import './index.scss'

const InformationList = ({ info, headerName }) => (
  <div className="card">
    <h1 className="header">{headerName}</h1>
    <ul className="information">
      {info.map(({ id, icon, text }) => (
        <li className="information__list" key={id}>
          <i className={`${icon} information__icon`} />
          <h2 className="information__text">{text}</h2>
        </li>
      ))}
    </ul>
  </div>
)

export default InformationList
