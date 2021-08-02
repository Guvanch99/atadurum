import { PageHero, Contacts, ArticleName } from '../../components'

import './index.scss'

const About = () => {
  return (
    <div>
      <PageHero title="About" />
      <ArticleName name="Our Value" />
      <Contacts />
    </div>
  )
}

export default About
