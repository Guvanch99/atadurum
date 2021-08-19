import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import './index.scss'

const PageHero = ({ title, menu }) => (
  <div className="section">
    <h1 className="section__text">
      <NavLink className="section__link" to="/">
        Home{' '}
      </NavLink>
      {menu && (
        <>
          <span className="section__sign">&gt;</span>
          <NavLink className="section__middle-page" to="/menu">
            Menu
          </NavLink>
        </>
      )}{' '}
      <span className="section__sign">&gt;</span> {title}
    </h1>
  </div>
)

export default memo(PageHero)
