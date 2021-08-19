import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuAuth, ToggleButton, Language } from '../'
import { DATA } from '../../data'

import './index.scss'

const { links, logo } = DATA

const Sidebar = ({ sidebarVisibilityToggle }) => {
  return (
    <div className="sidebar">
      <NavLink to="/">
        <div>
          <img className="logo" src={logo} alt="durum" />
        </div>
      </NavLink>
      <ul className="sidebar__menu">
        {links.map(({ id, url, text }) => (
          <li className="sidebar__menu_list" key={id}>
            <NavLink
              onClick={sidebarVisibilityToggle}
              className="sidebar__menu_link"
              to={url}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <MenuAuth sidebarVisibilteToggle={sidebarVisibilityToggle} />
      <Language />
      <ToggleButton />
      <button onClick={sidebarVisibilityToggle} className="sidebar__times">
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default memo(Sidebar)
