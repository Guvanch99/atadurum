import { useState } from 'react'

import ThemeContext from './theme-context'

const ThemeState = ({ children }) => {
  const [changeLang, setChangeLang] = useState(false)
  return (
    <ThemeContext.Provider value={{ changeLang, setChangeLang }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeState
