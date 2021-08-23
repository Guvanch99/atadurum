import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { DATA } from '../../data'

import './index.scss'

const { logo, whyWeKeys } = DATA
const AboutMain = () => {
  const { t } = useTranslation('translation')

  return (
    <div className="main-about">
      <img className="main-about__image" src={logo} alt="chef" />
      <div className="main-about__item">
        {whyWeKeys.map(key => (
          <h1 key={key} className="main-about__title">
            {t(`aboutPage.whyWe.${key}`)}
          </h1>
        ))}
      </div>
    </div>
  )
}

export default memo(AboutMain)
