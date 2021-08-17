import { memo } from 'react'
import { Link } from 'react-router-dom'

import { RouterIcon, ToggleButton, Language } from '..'
import { DATA } from '../../data'

import './index.scss'

const { links, logo } = DATA

const Navbar = ({ sidebarVisibilteToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={'/'}>
          <div>
            <img className="navbar__logo" src={logo} alt="durum" />
          </div>
        </Link>
        <ul className="navbar__menu">
          {links.map(({ id, url, text }) => (
            <li className="navbar__menu_list" key={id}>
              <Link className="navbar__menu_link" to={url}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <RouterIcon />
      <Language />
      <ToggleButton />
      <button onClick={sidebarVisibilteToggle} className="navbar__hamburger">
        <i className="fas fa-bars" />
      </button>
    </nav>
  )
}

export default memo(Navbar)
