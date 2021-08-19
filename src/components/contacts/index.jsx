import { memo } from 'react'

import InformationList from './internal/information-list'
import { ArticleName } from '..'
import { DATA } from '../../data'

import './index.scss'

const { contacts, socialMedia, workingSchedule } = DATA
const Contacts = () => (
  <>
    <ArticleName name="Contacts" />
    <div className="contacts">
      <div className="contacts__information">
        <InformationList info={contacts} headerName="Head office" />
      </div>
      <div className="contacts__schedule">
        <InformationList info={workingSchedule} headerName="Working Time" />
      </div>
      <div className="contacts__social-media">
        <InformationList info={socialMedia} headerName="Social Media" />
      </div>
    </div>
  </>
)

export default memo(Contacts)
