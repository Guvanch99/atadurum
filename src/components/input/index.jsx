import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Input = ({
  name,
  value,
  label,
  error,
  type,
  onChange,
  required,
  minLength,
  maxLength
}) => {
  const inputRef = useRef()
  useEffect(() => {
    if (name === 'userName') {
      inputRef.current.focus()
    }
  }, [])
  return (
    <div className="input-form">
      <label htmlFor={name} className="input-form__label">
        {label}
      </label>
      {error && <span className="input-form__error">{error}</span>}
      <input
        className="input-form__input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef}
        autoComplete="off"
        placeholder={label}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  focus: PropTypes.bool,
  required: PropTypes.bool.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number.isRequired
}

export default Input
