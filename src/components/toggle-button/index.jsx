import { useTheme } from '../../context/theme/theme-state'

import './index.scss'

const ToggleButton = () => {
  const { themeDark, changeThemeDark } = useTheme()
  //Todo rename classname toggle
  return (
    <>
      <input
        checked={themeDark}
        onChange={changeThemeDark}
        className="toggle-button"
        type="checkbox"
        id="react-switch-new"
      />
      <label className="toggle-button-background" htmlFor="react-switch-new">
        <span className="toggle-button-circle" />
      </label>
    </>
  )
}

export default ToggleButton
