import { memo } from 'react'

import { DATA } from '../../data'

import './index.scss'

const { aboutWhyWeText, logo } = DATA

const MainAbout = () => (
  <div className="main-about">
    <img className="main-about__image" src={logo} alt="chef" />
    <div className="main-about__item">
      {aboutWhyWeText.map(({ id, maintext }) => (
        <h1 key={id} className="main-about__item_title">
          {maintext}
        </h1>
      ))}
    </div>
  </div>
)

export default memo(MainAbout)
