import { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { ArticleName, Input } from '../../../components'
import { emptyFieldsWithErrors, isButtonDisabled } from '../../../utils'

import '../index.scss'

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    userName: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    userName: '',
    password: ''
  })

  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const history = useHistory()

  let { userName, password } = userLogin

  const handleChange = event => {
    const { value, name } = event.target
    setErrors({ ...errors, [name]: '' })
    setUserLogin({ ...userLogin, [name]: value })
  }

  emptyFieldsWithErrors(userLogin)

  const login = event => {
    event.preventDefault()
    const { userNames, password } = userLogin

    const emptyFieldsWithErrors = emptyFieldsWithErrors(userLogin)

    const areFildsWithErrorsEmpty = !!Object.keys(emptyFieldsWithErrors).length

    /*  if (areFildsWithErrorsEmpty) {
      setErrors({ ...errors, ...emptyFieldsWithErrors })
    } else {
      dispatch(signIn(email, password, history))
    }*/
  }

  const loginData = useMemo(
    () => [
      {
        name: 'userName',
        value: userName,
        label: 'login.labelUser',
        error: errors.userName,
        type: 'text',
        minLength: 4,
        maxLength: 50
      },
      {
        name: 'password',
        value: password,
        label: 'login.password',
        error: errors.password,
        type: 'password',
        minLength: 6,
        maxLength: 100
      }
    ],
    [userName, password, errors.userName, errors.password]
  )
  return (
    <>
      <ArticleName name="Login" />
      <form className="form">
        {loginData.map(
          (
            { name, value, label, error, type, minLength, maxLength },
            index
          ) => (
            <Input
              key={index}
              name={name}
              value={value}
              label={t(label)}
              error={error}
              type={type}
              onChange={handleChange}
              required={true}
              minLength={minLength}
              maxLength={maxLength}
            />
          )
        )}
        <button
          type="submit"
          onClick={login}
          className={classNames('form__button', {
            disabled: isButtonDisabled()
          })}
        >
          {t('login.button')}
        </button>
      </form>
    </>
  )
}
export default Login
