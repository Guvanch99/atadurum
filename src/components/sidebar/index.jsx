import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { MenuAuthCart, ToggleButton, Language } from '../'
import { DATA } from '../../data'

import './index.scss'
import { ROUTER_HOME } from '../../constants'

const { logo, links } = DATA

const Sidebar = ({ sidebarVisibilityToggle, lang, changeLanguageHandler }) => {
  const { t } = useTranslation('translation')

  const sideBarLogo = (
    <NavLink to={ROUTER_HOME}>
      <div>
        <img className="logo" src={logo} alt="durum" />
      </div>
    </NavLink>
  )
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        {sideBarLogo}
        {links.map(({ url, keyName }, index) => (
          <li className="sidebar__menu_list" key={index}>
            <NavLink
              onClick={sidebarVisibilityToggle}
              className="sidebar__menu_link"
              to={url}
            >
              {t(`links.${keyName}.name`)}
            </NavLink>
          </li>
        ))}
      </ul>
      <MenuAuthCart sidebarVisibilityToggle={sidebarVisibilityToggle} />
      <Language lang={lang} changeLanguageHandler={changeLanguageHandler} />
      <ToggleButton />
      <button onClick={sidebarVisibilityToggle} className="sidebar__times">
        <i className="fas fa-times" />
      </button>
    </div>
  )
}
Sidebar.propTypes = {
  sidebarVisibilityToggle: PropTypes.func.isRequired,
  lang: PropTypes.string,
  changeLanguageHandler: PropTypes.func
}
export default memo(Sidebar)
