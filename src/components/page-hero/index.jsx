import { Link } from 'react-router-dom'
import './index.scss'

const index = ({ title, menu }) => (
  <div className="section-center">
    <h3>
      <Link to="/">Home</Link>/{menu && <Link to="/menu">Menu</Link>}
      {title}
    </h3>
  </div>
)

export default index
