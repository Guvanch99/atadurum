import { useState, useContext } from 'react'

import ThemeContext from './theme-context'

const ThemeState = ({ children }) => {
  const [themeDark, setThemeDark] = useState(false)
  const changeThemeDark = () => setThemeDark(!themeDark)

  return (
    <ThemeContext.Provider value={{ themeDark, changeThemeDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeState

export const useTheme = () => useContext(ThemeContext)
