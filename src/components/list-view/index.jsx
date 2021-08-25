import { memo } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { PageLink } from '..'
import { ROUTER_MENU } from '../../constants'

import './index.scss'

const ListView = ({ products }) => {
  const { t } = useTranslation('translation')

  return (
    <div className="list">
      {products.map(({ id, name, src, description, price }) => (
        <div key={id} className="list__container">
          <img className="list__image" src={src} alt={name} />
          <div className="list__info">
            <h1 className="food__name">{t(name)}</h1>
            <h3 className="food__price">
              {t('productPrice')}
              {price}
              {t('productPriceCurrency')}
            </h3>
            <p className="food__description">{t(description)}</p>
            <PageLink
              name={t('pageLink.cart')}
              direction={`${ROUTER_MENU}/${id}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.array.isRequired
}
export default memo(ListView)
