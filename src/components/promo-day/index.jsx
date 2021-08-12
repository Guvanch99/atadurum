import { PureComponent } from 'react'
import { DATA } from '../../data'
import { PageHero } from '..'
import './index.scss'

class PromoDay extends PureComponent {
  render() {
    const { promoImage } = DATA
    return (
      <>
        <PageHero title="Promotions" />
        <h1 className="date">Every Wednesday</h1>
        <div className="promoday">
          <img className="promoday__image" src={promoImage} alt="promo" />
          <div className="promoday__info">
            <h2 className="promoday__text">Durum Party</h2>
            <h3 className="promoday__time">
              Date :<span className="promoday__time_color">12.08.2021</span>
            </h3>
            <hr />
            <h1 className="promoday__description">
              Take two Turkish Durum pay one &#128522; &#128522; &#128522;
            </h1>
            <p className="promoday__obligations">
              Obligation:
              <span className="promoday__obligations_color">
                You must be in mask
              </span>
              &#128567;
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default PromoDay
