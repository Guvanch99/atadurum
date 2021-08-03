import { memo } from 'react'
import { Link } from 'react-router-dom'

import { DATA } from '../../data'
import RouterIcon from '../router-icon'

import './index.scss'

const { links, logo } = DATA

const Navbar = ({ sidebarVisibilteToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img className="logo" src={logo} alt="durum" />
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

      <div>
        <button>Theme Change</button>
      </div>
      <button onClick={sidebarVisibilteToggle} className="navbar__hamburger">
        <i className="fas fa-bars" />
      </button>
    </nav>
  )
}

export default memo(Navbar)
