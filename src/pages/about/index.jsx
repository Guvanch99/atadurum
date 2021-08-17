import { memo } from 'react'
import {
  PageHero,
  Contacts,
  ArticleName,
  Accordion,
  MainAbout
} from '../../components'
import { DATA } from '../../data'

import './index.scss'

const { aboutOurValueText } = DATA
const About = () => {
  return (
    <div className="about-container">
      <PageHero title="About" />
      <ArticleName name="Our Value" />
      <div className="accordian-container">
        {aboutOurValueText.map(({ id, maintext, secondarytext }) => (
          <Accordion
            key={id}
            maintext={maintext}
            secondarytext={secondarytext}
          />
        ))}
      </div>
      <ArticleName name="Why We" />
      <MainAbout />
      <Contacts />
    </div>
  )
}

export default memo(About)
