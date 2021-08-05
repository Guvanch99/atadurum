import { useState } from 'react'

import './index.scss'

const Accordion = ({ maintext, secondarytext }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion__title_name">{maintext}</div>
        <div className="accordion__title_plusminus">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion__content">{secondarytext}</div>}
    </div>
  )
}

export default Accordion
