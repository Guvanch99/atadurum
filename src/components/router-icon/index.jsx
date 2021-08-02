import { Link } from 'react-router-dom'

import './index.scss'

const RouterIcon = () => (
  <ul className="menu">
    <li className="menu__list">
      <Link className="menu_link" to="/card">
        Cart
        <i className="fas fa-cart-plus menu__icon" />
        <span className="order-count">2</span>
      </Link>
    </li>
    <li className="menu__list">
      <Link className="menu__link" to="/login">
        Login
        <i className="fas fa-user menu__icon" />
      </Link>
    </li>
  </ul>
)

export default RouterIcon
