import { useState } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Accordion = ({ label, description }) => {
  const [isActive, setIsActive] = useState(false)
  let signs = isActive ? '-' : '+'
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion__label">{label}</div>
        <div className="accordion__sign">{signs}</div>
      </div>
      {isActive && <p className="accordion__description">{description}</p>}
    </div>
  )
}
Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Accordion
