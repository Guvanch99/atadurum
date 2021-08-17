import './index.scss'

const AmountButtons = ({ amount, increase, descrease }) => (
  <div className="amount">
    <button className="amount__sign" onClick={descrease}>
      -
    </button>
    <h2 className="amount__counter">{amount}</h2>
    <button className="amount__sign" onClick={increase}>
      +
    </button>
  </div>
)

export default AmountButtons
