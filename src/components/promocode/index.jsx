import { Component } from 'react'
import { connect } from 'react-redux'

import { PromoCodeGift, Spinner } from '..'
import { getPresent } from '../../redux/promotions/actionCreators'

import './index.scss'

class PromoCode extends Component {
  state = {
    promocode: '',
    entered: false,
    error: false
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

  render() {
    const { entered, promocode, error } = this.state
    const { present } = this.props

    return (
      <div className="promocode">
        <form className="promocode-form" onSubmit={this.promocodeSubmit}>
          <label className="promocode-form__label">PromoCode</label>
          <input
            value={promocode}
            onChange={e => this.setState({ promocode: e.target.value })}
            className="promocode-form__input"
            type="text"
            placeholder={error ? 'Invalid promo code' : 'Enter promo code'}
          />
          <button disabled={entered} className="promocode-form__submit">
            {entered ? 'Disabled' : 'Submit'}
          </button>
        </form>
        {!present ? <Spinner /> : <PromoCodeGift present={present} />}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFreeMeal: id => dispatch(getPresent(id))
  }
}
function mapStateToProps(state) {
  const {
    promotions: { present }
  } = state
  return { present }
}
export default connect(mapStateToProps, mapDispatchToProps)(PromoCode)
