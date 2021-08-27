import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { DATA } from '../../data'

import './index.scss'

const { menuAuthCart } = DATA

const MenuAuthCart = ({ sidebarVisibilityToggle }) => {
  const { totalItems } = useSelector(state => state.cart)
  const { t } = useTranslation('translation')

  return (
    <ul className="menu">
      {menuAuthCart.map(({ url, keyName, iconName }, index) => (
        <li key={index} className="menu__list">
          <NavLink
            onClick={sidebarVisibilityToggle}
            className="menu__list-link"
            to={url}
          >
            {t(`menuAuthCart.${keyName}.name`)}
            <i className={`fas ${iconName} menu__list-icon`} />
            {index === 0 && <span className="order-count">{totalItems}</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
MenuAuthCart.propTypes = {
  sidebarVisibilityToggle: PropTypes.func
}
export default memo(MenuAuthCart)
