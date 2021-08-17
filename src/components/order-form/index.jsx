import { useRef, useEffect, memo } from 'react'

import './index.scss'

const OrderForm = () => {
  const inputRef = useRef()
  const orderSubmitHandler = e => {
    e.preventDefault()
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <form className="order-form" onSubmit={orderSubmitHandler}>
      <h1 className="order-form__info">Main Information</h1>
      <div className="order-form__group">
        <label className="order-form__label">Name</label>
        <input
          className="form__group_input"
          ref={inputRef}
          required
          min="4"
          max="255"
        />

        <div className="order-form__group">
          <label className="order-form__label">Email</label>
          <input className="form__group_input" max="255" />
        </div>
        <div className="order-form__group">
          <label className="order-form__label">Phone Number</label>
          <input
            className="form__group_input"
            type="number"
            required
            min="9"
            max="9"
          />
        </div>
      </div>

      <h1 className="order-form__info">Address</h1>
      <div className="order-form__group">
        <label className="order-form__label" htmlFor="sort">
          Select City
        </label>
        <select className="order-form__sort" name="city">
          <option value="Grodno">Grodno</option>
          <option value="Minsk">Minsk</option>
          <option value="Brest">Brest</option>
          <option value="Vitebsk">Vitebsk</option>
          <option value="Gomel">Gomel</option>
          <option value="Mogilyov">Mogilyov</option>
        </select>
      </div>
      <div className="order-form__group">
        <label className="order-form__label">Street</label>
        <input className="form__group_input" required min="4" max="255" />
      </div>
      <div className="order-form__group">
        <label className="order-form__label">House</label>
        <input className="form__group_input" required max="255" min="4" />
      </div>
      <div className="order-form__group">
        <label className="order-form__label">Storey</label>
        <input className="form__group_input" max="25" />
      </div>
      <div className="order-form__group">
        <label className="order-form__label">Entrance</label>
        <input className="form__group_input" max="55" />
      </div>
      <div className="order-form__group">
        <label className="order-form__label">Commets</label>
        <textarea
          className="order-form__textarea"
          rows="4"
          cols="50"
          maxLength="500"
        />
      </div>

      <h1 className="order-form__info">Payment way of order</h1>
      <div className="order-form__group">
        <label className="order-form__label">Cash</label>
        <input type="checkbox" name="cash" defaultChecked="cash" />
      </div>
      <div className="order-form__group">
        <label className="order-form__label">Card to the courier </label>
        <input type="checkbox" name="card" />
      </div>

      <button className="order-form__button">Order</button>
    </form>
  )
}

export default memo(OrderForm)
