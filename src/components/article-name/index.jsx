import { memo } from 'react'

import './index.scss'

const ArticleName = ({ name }) => <h1 className="article-name">{name}</h1>

export default memo(ArticleName)
