import { NavLink } from 'react-router-dom'

import './index.scss'

const PageLink = ({ direction, name, customStyle = '', eventHandler }) => (
  <NavLink
    onClick={eventHandler ? eventHandler : null}
    className="page-link"
    to={`/${direction}`}
  >
    {name}
  </NavLink>
)

export default PageLink
