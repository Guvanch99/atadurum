import { memo } from 'react'

import './index.scss'

const InformationList = ({ info, headerName }) => (
  <div className="card">
    <h1 className="card__header">{headerName}</h1>
    <ul className="card__information">
      {info.map(({ id, icon, text }) => (
        <li className="card__information-list" key={id}>
          <i className={`${icon} card__information-icon`} />
          <h2 className="card__information-text">{text}</h2>
        </li>
      ))}
    </ul>
  </div>
)

export default memo(InformationList)
