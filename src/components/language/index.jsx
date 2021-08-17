import { useState } from 'react'

import './index.scss'

const Language = () => {
  const [languages, setLanguages] = useState('en')
  console.log(languages)
  return (
    <div className="language">
      <label htmlFor="language">
        <i className="fas fa-globe language language__icon " />
      </label>
      <select
        className="language__select"
        name="language"
        value={languages}
        onChange={e => setLanguages(e.target.value)}
      >
        <option value="en">&#127482;en</option>
        <option value="ru">ru</option>
      </select>
    </div>
  )
}

export default Language
