import { useState, useRef, useEffect } from 'react'

import { ArticleName } from '../../../components'

import '../index.scss'

const Login = () => {
  const inputRef = useRef()
  const [login, setLogin] = useState({
    user: '',
    password: ''
  })
  const submitHandler = e => {
    e.preventDefault()
  }
  const loginHandler = e => {
    const { name, value } = e.target
    setLogin({
      [name]: value
    })
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const { user, password } = login
  return (
    <>
      <ArticleName name="Login" />
      <form className="form" onSubmit={submitHandler}>
        <div className="form__group">
          <label className="form__group_label" htmlFor="user">
            User
          </label>
          <input
            className="form__group_input"
            ref={inputRef}
            autoComplete="off"
            onChange={loginHandler}
            value={user}
            type="text"
            placeholder="user"
          />
          <p className="form__group_error">Error</p>
        </div>
        <div className="form__group">
          <label className="form__group_label" htmlFor="password">
            Password
          </label>
          <input
            className="form__group_input"
            autoComplete="off"
            onChange={loginHandler}
            value={password}
            type="password"
            placeholder="password"
          />
          <p className="form__group_error">Error</p>
        </div>
        <button className="form__login">Login</button>
      </form>
    </>
  )
}
export default Login
