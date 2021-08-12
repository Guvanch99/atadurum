import { Component } from 'react'
import { connect } from 'react-redux'

import { Spinner } from '..'
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
        {this.props.Load ? (
          <Spinner />
        ) : (
          <div className="promocode-gift">
            <h1 className="promocde-gift__text">Hurrey your Gift</h1>
            <img alt="present" className="promocode-gift__image" />
          </div>
        )}
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
  const { present, Load } = state
  return { present, Load }
}
export default connect(mapStateToProps, mapDispatchToProps)(PromoCode)
