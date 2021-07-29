import { DATA } from '../../data'
import { ArticleName } from '..'
import './index.scss'
const { mottoImage } = DATA

const Motto = () => (
  <>
    <ArticleName name="OUR MOTTO" />
    <div className="motto">
      <img className="motto__image" src={mottoImage} alt="Motto" />
      <svg
        className="motto__svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M53,-61.6C65.5,-52.7,70.2,-33,70.3,-15C70.5,3.1,66.1,19.3,57.6,32.6C49.2,46,36.7,56.3,22.8,60.6C8.8,64.8,-6.7,62.8,-23.7,59.2C-40.7,55.6,-59.3,50.3,-65.9,38.3C-72.5,26.3,-67.3,7.7,-64.3,-11.7C-61.3,-31.1,-60.6,-51.2,-50.3,-60.5C-39.9,-69.7,-20,-68,0.2,-68.2C20.3,-68.3,40.5,-70.4,53,-61.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="motto__text">
        <h2 className="motto__text_h2">Доставка еды за 30 мин или </h2>
        <h1 className="motto__text_h1">Дурум бесплатно !!!</h1>
      </div>
    </div>
  </>
)
export default Motto
