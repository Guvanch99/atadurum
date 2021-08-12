import { useState, useEffect, useRef } from 'react'

import { ArticleName } from '../../../components'
import '../index.scss'

const SingUp = () => {
  const inputRef = useRef()
  const [signUp, setSignUp] = useState({
    user: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const submitHandler = e => {
    e.preventDefault()
  }
  const signUpHandler = e => {
    const { name, value } = e.target
    setSignUp({
      [name]: value
    })
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const { user, email, password, passwordConfirm } = signUp
  return (
    <>
      <ArticleName name="SingUp" />
      <form className="form" onSubmit={submitHandler}>
        <div className="form__group">
          <label className="form__group_label" htmlFor="user">
            UserName
          </label>
          <input
            autoComplete="off"
            ref={inputRef}
            className="form__group_input"
            onChange={signUpHandler}
            value={user}
            name="user"
            type="text"
            placeholder="user"
            required
            min="4"
            max="255"
          />
          <p className="form__group_error">Error</p>
        </div>
        <div className="form__group">
          <label className="form__group_label" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="off"
            className="form__group_input"
            onChange={signUpHandler}
            value={email}
            name="email"
            type="email"
            placeholder="email"
            required
            min="10"
            max="255"
          />
          <p className="form__group_error">Error</p>
        </div>

        <div className="form__group">
          <label className="form__group_label" htmlFor="password">
            Password
          </label>
          <input
            autoComplete="off"
            className="form__group_input"
            onChange={signUpHandler}
            value={password}
            name="password"
            placeholder="password"
            required
            max="50"
            min="6"
          />
          <p className="form__group_error">Error</p>
        </div>

        <div className="form__group">
          <label className="form__group_label" htmlFor="password-confirm">
            Password
          </label>
          <input
            autoComplete="off"
            className="form__group_input"
            onChange={signUpHandler}
            value={passwordConfirm}
            name="passwordConfirm"
            type="password"
            placeholder="passowrd-confirm"
            required
            max="50"
            min="6"
          />
          <p className="form__group_error">Error</p>
        </div>
        <button className="form__submit">Sign Up</button>
      </form>
    </>
  )
}
export default SingUp
