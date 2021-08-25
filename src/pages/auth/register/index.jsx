import { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { isButtonDisabled, emptyFieldsWithErrors } from '../../../utils'
import { ArticleName, Input } from '../../../components'
import { createUser } from '../../../redux/auth/actionCreator'

import '../index.scss'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslation('translation')

  const [userCredentials, setUserCredentials] = useState({
    id: uuidv4(),
    userName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const { userName, email, password } = userCredentials
  isButtonDisabled(
    userName,
    email,
    password,
    errors.firstName,
    errors.secondName,
    errors.email,
    errors.password
  )
  const CredencialData = useMemo(
    () => [
      {
        name: 'userName',
        value: userName,
        label: 'registration.labelUser',
        error: errors.userName,
        type: 'text',
        minLength: 4,
        maxLength: 50
      },
      {
        name: 'email',
        value: email,
        label: 'registration.email',
        error: errors.email,
        type: 'email',
        minLength: 15,
        maxLength: 100
      },
      {
        name: 'password',
        value: password,
        label: 'registration.password',
        error: errors.password,
        type: 'password',
        minLength: 6,
        maxLength: 100
      }
    ],
    [userName, email, password, errors.userName, errors.email, errors.password]
  )
  const handleChange = e => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: '' })
    setUserCredentials({ ...userCredentials, [name]: value })
  }
  emptyFieldsWithErrors(userCredentials)

  const register = e => {
    e.preventDefault()
    const { id, userName, email, password } = userCredentials
    const getemptyFieldsWithErrors = emptyFieldsWithErrors(userCredentials)
    const areFildsWithErrorsEmpty = !!Object.keys(getemptyFieldsWithErrors)
      .length

    if (areFildsWithErrorsEmpty) {
      setErrors({ ...errors, ...emptyFieldsWithErrors })
    } else {
      const updatedUser = {
        id,
        userName,
        email,
        password: window.btoa(password)
      }
      dispatch(createUser(updatedUser))
      history.goBack()
    }
  }
  return (
    <>
      <ArticleName name="SingUp" />
      <form className="form">
        {CredencialData.map(
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
          onClick={register}
          className={classNames('form__button ', 'button', {
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
