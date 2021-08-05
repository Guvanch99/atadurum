import { Link } from 'react-router-dom'

import './index.scss'

const RouterIcon = ({ sidebarVisibilteToggle }) => (
  <ul className="menu">
    <li className="menu__list">
      <Link onClick={sidebarVisibilteToggle} className="menu_link" to="/cart">
        Cart
        <i className="fas fa-cart-plus menu__icon" />
        <span className="order-count">2</span>
      </Link>
    </li>
    <li className="menu__list">
      <Link onClick={sidebarVisibilteToggle} className="menu__link" to="/login">
        Login
        <i className="fas fa-user menu__icon" />
      </Link>
      <Link
        onClick={sidebarVisibilteToggle}
        className="menu__link"
        to="/sign-up"
      >
        Sign-up
        <i className="fas fa-user-plus menu__icon" />
      </Link>
    </li>
  </ul>
)

export default RouterIcon
