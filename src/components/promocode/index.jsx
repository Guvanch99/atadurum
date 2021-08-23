import { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import axios from 'axios'

import { PromoCodeGift, Spinner, Quote } from '..'
import { getPresentPromo } from '../../redux/cart/actionCreators'

import './index.scss'

class PromoCode extends Component {
  state = {
    promocode: '',
    entered: false,
    error: false,
    randomQuote: ''
  }

  promocodeSubmit = e => {
    e.preventDefault()
    if (this.state.promocode.toUpperCase() === 'HALYAVA') {
      let id = Math.floor(Math.random() * 17)
      this.props.getFreeMeal(id)
      this.setState({ entered: true, promocode: '' })
    } else {
      this.setState({ error: true })
    }
  }
  async componentDidMount() {
    axios('https://tronalddump.io/random/quote').then(({ data }) => {
      const { value } = data
      this.setState({ randomQuote: value })
    })
  }

  render() {
    const { entered, promocode, error, randomQuote } = this.state
    const { gift, t } = this.props
    return (
      <>
        {!randomQuote ? <Spinner /> : <Quote randomQuote={randomQuote} />}
        <div className="promocode">
          <form className="promocode-form" onSubmit={this.promocodeSubmit}>
            <label className="promocode-form__label">
              {t('promoCode.label')}
            </label>
            <input
              value={promocode}
              onChange={e => this.setState({ promocode: e.target.value })}
              className="promocode-form__input"
              type="text"
              placeholder={
                error
                  ? t('promoCode.placeholderError')
                  : t('promoCode.placeholderDefault')
              }
            />
            <button
              disabled={entered || gift}
              className="promocode-form__submit"
            >
              {entered || gift
                ? t('promoCode.buttonDisabled')
                : t('promoCode.buttonSubmit')}
            </button>
          </form>

          {!gift ? <Spinner /> : <PromoCodeGift present={gift} />}
        </div>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFreeMeal: id => dispatch(getPresentPromo(id))
  }
}
function mapStateToProps(state) {
  const gift = state.cart.gift
  return { gift }
}

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PromoCode)
)
