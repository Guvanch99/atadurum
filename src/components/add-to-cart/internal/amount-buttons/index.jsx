import './index.scss'

const AmountButtons = ({ amount, increase, descrease }) => (
  <div className="amount">
    <button className="amount_btn" onClick={descrease}>
      -
    </button>
    <h2 className="amount_counter">{amount}</h2>
    <button className="amount_btn" onClick={increase}>
      +
    </button>
  </div>
)

export default AmountButtons
