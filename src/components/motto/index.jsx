import { memo } from 'react'

import { DATA } from '../../data'
import { ArticleName } from '..'
import { ReactComponent as MottoImg } from '../../assets/motto.svg'

import './index.scss'

const { mottoImage } = DATA

const Motto = () => (
  <>
    <ArticleName name="OUR MOTTO" />
    <div className="motto">
      <img className="motto__image" src={mottoImage} alt="Motto" />
      <MottoImg className="motto__svg" />
      <div className="motto__text">
        <h2 className="motto__text-main">Delivery is more than 30 min </h2>
        <h1 className="motto__text-secondary">Take it free !!!</h1>
      </div>
    </div>
  </>
)
export default memo(Motto)
