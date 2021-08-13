import { useState } from 'react'

import './index.scss'

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <input
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
        className="input__checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#fff' }}
        className="input__checkbox_label"
        htmlFor={`react-switch-new`}
      >
        <span className={`input__checkbox_button`} />
      </label>
    </>
  )
}

export default ToggleButton
