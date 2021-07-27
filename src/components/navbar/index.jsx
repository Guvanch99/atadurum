import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import {DATA} from '../../data'
import './index.scss'
const {links}=DATA
const Navbar = () => {
    return (
        <div>
            <Link>
            <img src={logo} alt='durum'/>
            </Link>
            <ul>
            {
                links.map(({id,url,text})=>(

                    <li key={id}>
                        <Link to={url}>{text}</Link>
                    </li>
                ))
            }
            </ul>
          
        </div>
    )
}

export default Navbar
