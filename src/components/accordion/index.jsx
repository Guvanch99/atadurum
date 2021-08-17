import { useState } from 'react'

import './index.scss'

const Accordion = ({ maintext, secondarytext }) => {
  const [isActive, setIsActive] = useState(false)
  let signs = isActive ? '-' : '+'
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion__title_name">{maintext}</div>
        <div className="accordion__title_plusminus">{signs}</div>
      </div>
      {isActive && <p className="accordion__content">{secondarytext}</p>}
    </div>
  )
}

export default Accordion
