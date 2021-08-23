import { memo } from 'react'
import { useTheme } from '../../hooks'

import './index.scss'

const ToggleButton = () => {
  const { themeDark, changeThemeDark } = useTheme()
  return (
    <>
      <input
        checked={themeDark}
        onChange={changeThemeDark}
        className="toggle-button"
        type="checkbox"
        id="toggle"
      />
      <label className="toggle-button-background" htmlFor="toggle">
        <span className="toggle-button-circle" />
      </label>
    </>
  )
}

export default memo(ToggleButton)
