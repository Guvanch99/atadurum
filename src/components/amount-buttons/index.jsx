import './index.scss'

const AmountButtons = ({ amount, increase, decrease, styleTable = false }) => {
  return (
    <div className={styleTable ? 'amount-for-table' : 'amount'}>
      <button
        className={styleTable ? 'amount-for-table__sign' : 'amount__sign'}
        onClick={decrease}
      >
        -
      </button>
      <h2
        className={styleTable ? 'amount-for-table__counter' : 'amount__counter'}
      >
        {amount}
      </h2>
      <button
        className={styleTable ? 'amount-for-table__sign' : 'amount__sign'}
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}

export default AmountButtons
