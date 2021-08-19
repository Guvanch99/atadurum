import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuAuth, ToggleButton, Language } from '..'
import { DATA } from '../../data'

import './index.scss'

const { links, logo } = DATA

const Navbar = ({ sidebarVisibilityToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to={'/'}>
          <div>
            <img className="navbar__logo" src={logo} alt="durum" />
          </div>
        </NavLink>
        <ul className="navbar__menu">
          {links.map(({ id, url, text }) => (
            <li className="navbar__menu_list" key={id}>
              <NavLink className="navbar__menu_link" to={url}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <MenuAuth />
      <Language />
      <ToggleButton />
      <button onClick={sidebarVisibilityToggle} className="navbar__hamburger">
        <i className="fas fa-bars" />
      </button>
    </nav>
  )
}

export default memo(Navbar)
