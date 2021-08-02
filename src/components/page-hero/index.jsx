import { Link } from 'react-router-dom'

import './index.scss'

const PageHero = ({ title, menu }) => (
  <div className="section">
    <h1 className="section_text">
      <Link className="section_link" to="/">
        Home
      </Link>
      {menu && <Link to="/menu">Menu</Link>}/{title}
    </h1>
  </div>
)

export default PageHero
