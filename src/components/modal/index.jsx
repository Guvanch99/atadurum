import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { ROUTER_HOME } from '../../constants'

import './index.scss'

const Modal = ({ modalVisibility }) => {
  const history = useHistory()
  const { t } = useTranslation('translation')
  const closeModal = () => {
    modalVisibility(true)
    history.push(ROUTER_HOME)
  }
  return (
    <div className="modal">
      <h1 className="modal__label">{t('modal')}</h1>
      <button onClick={closeModal} className="modal__button">
        {t('close')}
      </button>
    </div>
  )
}

Modal.propTypes = {
  modalVisibility: PropTypes.func.isRequired
}

export default Modal
