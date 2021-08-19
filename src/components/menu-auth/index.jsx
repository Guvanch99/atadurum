import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { DATA } from '../../data'

import './index.scss'

const { menuAuth } = DATA

const MenuAuth = ({ sidebarVisibilityToggle }) => {
  const { cart, gift } = useSelector(state => state.cart)

  let totalItems = cart.reduce((total, i) => (total += i.amount), 0)
  let total = gift ? totalItems + 1 : totalItems

  return (
    <ul className="menu">
      {menuAuth.map(({ id, url, name, icon }) => (
        <li key={id} className="menu__list">
          <NavLink
            onClick={sidebarVisibilityToggle}
            className="menu__list-link"
            to={url}
          >
            {name}
            <i className={`${icon}  menu__list-icon `} />
          </NavLink>
        </li>
      ))}

      <span className="order-count">{total}</span>
    </ul>
  )
}

export default memo(MenuAuth)
