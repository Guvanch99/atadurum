import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { isButtonDisabled } from '../../../utils'
import { ArticleName, Input, PageLink } from '../../../components'
import { createUser } from '../../../redux/auth/actionCreator'
import { ROUTER_LOGIN } from '../../../constants'

import '../index.scss'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslation('translation')
  const { userExist } = useSelector(state => state.auth)
  const [userCredentials, setUserCredentials] = useState({
    id: uuidv4(),
    userName: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    userNameError: '',
    emailError: '',
    passwordError: ''
  })
  const { userName, email, password } = userCredentials
  isButtonDisabled(
    userName,
    email,
    password,
    errors.userNameError,
    errors.emailError,
    errors.passwordError
  )
  const CredencialData = useMemo(
    () => [
      {
        name: 'userName',
        value: userName,
        label: 'registration.labelUser',
        error: errors.userNameError,
        type: 'text'
      },
      {
        name: 'email',
        value: email,
        label: 'registration.email',
        error: errors.emailError,
        type: 'email'
      },
      {
        name: 'password',
        value: password,
        label: 'registration.password',
        error: errors.passwordError,
        type: 'password'
      }
    ],
    [
      userName,
      email,
      password,
      errors.userNameError,
      errors.emailError,
      errors.passwordError
    ]
  )
  const validate = () => {
    const { userName, email, password } = userCredentials
    const { userNameError, emailError, passwordError } = errors
    console.log(userNameError, emailError, passwordError)
    if (!userName || userName.length <= 4) {
      setErrors({
        ...errors,
        userNameError: 'userNameError'
      })
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (!email || reg.test(email) === false) {
      setErrors({ ...errors, emailError: 'emailError' })
    }

    if (!password || password.length < 6) {
      setErrors({
        ...errors,
        passwordError: 'passwordError'
      })
    }

    if (emailError || userNameError || passwordError) {
      console.log('errrrrr', emailError, userName, passwordError)

      setErrors({ userNameError, emailError, passwordError })
      return false
    }

    return true
  }

  const handleChange = e => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: '' })
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const register = e => {
    e.preventDefault()

    const validation = validate()
    console.log('v', validation)
    if (!validation) {
      const updatedUser = {
        ...userCredentials,
        password: window.btoa(password)
      }
      dispatch(createUser(updatedUser, history))
    } else {
    }
  }
  return (
    <>
      <ArticleName name={t('articleNames.signUp')} />
      {userExist && (
        <div>
          <h1 className="user__error">{t('registered')}</h1>
          <PageLink to={ROUTER_LOGIN}>{t('pageLink.login')}</PageLink>
        </div>
      )}
      <form className="form">
        {CredencialData.map(({ name, value, label, error, type }, index) => (
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
          onClick={register}
          className={classNames('form__button ', {
            disabled: isButtonDisabled()
          })}
        >
          {t('registration.button')}
        </button>
      </form>
    </>
  )
}

export default Register
