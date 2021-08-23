import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import './index.scss'

const Language = ({ lang, changeLanguageHandler }) => {
  const { t } = useTranslation('translation')

  return (
    <div className="language">
      <label htmlFor="language">
        <i className="fas fa-globe language language__icon " />
      </label>
      <select
        className="language__select"
        name="language"
        as="select"
        value={lang}
        onChange={e => changeLanguageHandler(e)}
      >
        <option value="en">{t('lang.en')}</option>
        <option value="ru">{t('lang.ru')}</option>
      </select>
    </div>
  )
}

Language.propTypes = {
  lang: PropTypes.string.isRequired,
  changeLanguageHandler: PropTypes.func.isRequired
}
export default Language
