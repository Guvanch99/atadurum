import { Component } from 'react'
import { connect } from 'react-redux'

import { addGift } from '../../redux/cart/actionCreators'

import './index.scss'

class PromoCodeGift extends Component {
  componentDidMount() {
    this.props.addGift(this.props.present)
  }
  render() {
    const { name, src, type, description } = this.props.present
    return (
      <div className="promocode-gift">
        <h1 className="promocde-gift__text">Hurrey your Free Gift {name}</h1>
        <img src={src} alt="present" className="promocode-gift__image" />
        <h3 className="promocode-gift__type">type:{type}</h3>
        <p className="promocode-gift__description">description:{description}</p>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addGift: gift => dispatch(addGift(gift))
  }
}
export default connect(null, mapDispatchToProps)(PromoCodeGift)
