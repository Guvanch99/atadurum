import { memo } from 'react'
import { Link } from 'react-router-dom'

import { RouterIcon, ToggleButton } from '../'

import { DATA } from '../../data'

import './index.scss'

const { links, logo } = DATA

const Sidebar = ({ sidebarVisibilteToggle }) => {
  return (
    <div className="sidebar">
      <Link>
        <div>
          <img className="logo" src={logo} alt="durum" />
        </div>
      </Link>
      <ul className="sidebar__menu">
        {links.map(({ id, url, text }) => (
          <li className="sidebar__menu_list" key={id}>
            <Link
              onClick={sidebarVisibilteToggle}
              className="sidebar__menu_link"
              to={url}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <RouterIcon sidebarVisibilteToggle={sidebarVisibilteToggle} />
      <ToggleButton />
      <button onClick={sidebarVisibilteToggle} className="sidebar__times">
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default memo(Sidebar)
