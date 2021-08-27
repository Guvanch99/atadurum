import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { ArticleName, Input, PageLink } from '../../../components'
import { emptyFieldsWithErrors, isButtonDisabled } from '../../../utils'
import { ROUTER_SIGN_UP } from '../../../constants'

import '../index.scss'

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    userName: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    userNameError: '',
    passwordError: ''
  })

  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const history = useHistory()
  const { userNotExist } = useSelector(state => state.auth)
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
  }

  const loginData = useMemo(
    () => [
      {
        name: 'userName',
        value: userName,
        label: 'login.labelUser',
        error: errors.userName,
        type: 'text'
      },
      {
        name: 'password',
        value: password,
        label: 'login.password',
        error: errors.password,
        type: 'password'
      }
    ],
    [userName, password, errors.userName, errors.password]
  )
  const validate = () => {
    if (!userName || userName.length <= 4) {
      setErrors({
        ...errors,
        userNameError: 'userNameError'
      })
    }
    if (!password || password.length < 6) {
      setErrors({
        ...errors,
        passwordError: 'passwordError'
      })
    }
  }
  return (
    <>
      <ArticleName name={t('articleNames.signUp')} />
      {userNotExist && (
        <div>
          <h1 className="user__error">{t('login.userNotFound')}</h1>
          <PageLink to={ROUTER_SIGN_UP}>{t('pageLink.signUp')}</PageLink>
        </div>
      )}
      <form className="form">
        {loginData.map(({ name, value, label, error, type }, index) => (
          <Input
            key={index}
            name={name}
            value={value}
            label={t(label)}
            error={t(error)}
            type={type}
            onChange={handleChange}
            required={true}
          />
        ))}
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
