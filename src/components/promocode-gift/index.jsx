import { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

import './index.scss'

class PromoCodeGift extends Component {
  render() {
    const { name, src, description } = this.props.present
    const { t } = this.props
    return (
      <div className="promocode-gift">
        <h1 className="promocde-gift__text">{t('promoCodeGift.label')}</h1>
        <img src={src} alt="present" className="promocode-gift__image" />
        <h1> {t(name)}</h1>
        <p className="promocode-gift__description">{t(description)}</p>
      </div>
    )
  }
}
PromoCodeGift.propTypes = {
  present: PropTypes.object.isRequired,
  src: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}
export default withTranslation()(PromoCodeGift)
