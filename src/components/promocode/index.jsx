import { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import axios from 'axios'

import { PromoCodeGift, Spinner, Quote } from '..'
import { getPresentPromo } from '../../redux/cart/actionCreators'
import { randomId } from '../../utils'

import './index.scss'

class PromoCode extends Component {
  state = {
    promocode: '',
    error: false,
    randomQuote: ''
  }

  promocodeSubmit = e => {
    e.preventDefault()
    if (this.state.promocode.toUpperCase() === 'HALYAVA') {
      let id = randomId(1, 17)
      this.props.getFreeMeal(id)
      this.setState({ promocode: '' })
    } else {
      this.setState({ error: true, promocode: '' })
    }
  }

  async componentDidMount() {
    axios('https://tronalddump.io/random/quote').then(({ data }) => {
      const { value } = data
      this.setState({ randomQuote: value })
    })
  }

  render() {
    const { promocode, error, randomQuote } = this.state
    const { promocodeUsed, gift, t } = this.props
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
              disabled={promocodeUsed || gift}
              className="promocode-form__submit"
            >
              {promocodeUsed || gift
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
  const { gift, promocodeUsed } = state.cart
  return { gift, promocodeUsed }
}

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PromoCode)
)
