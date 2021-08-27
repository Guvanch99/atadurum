import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import classNames from 'classnames'

import { Input, Modal } from '..'

import './index.scss'

const OrderForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslation('translation')

  const [userOrder, setUserOrder] = useState({
    userName: '',
    email: '',
    phone: '',
    street: '',
    house: '',
    entrance: '',
    storey: '',
    payment: 'cash',
    paymentActive: true
  })
  const [errors, setErrors] = useState({
    userNameError: '',
    emailError: '',
    phoneError: '',
    streetError: '',
    houseError: '',
    entranceError: '',
    storeyError: '',
    payment: 'cash'
  })
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    userName,
    email,
    phone,
    street,
    house,
    entrance,
    storey,
    paymentActive
  } = userOrder
  const orderSubmit = e => {
    e.preventDefault()
    setIsModalVisible(true)

    localStorage.removeItem('cart')
  }
  const orderData = useMemo(
    () => ({
      mainInfo: [
        {
          name: 'userName',
          value: userName,
          label: 'orderForm.mainInfo.user',
          error: errors.userNameError,
          type: 'text',
          minLength: 4,
          maxLength: 50
        },
        {
          name: 'email',
          value: email,
          label: 'orderForm.mainInfo.email',
          error: errors.emailError,
          type: 'email',
          minLength: 15,
          maxLength: 100
        },
        {
          name: 'phone',
          value: phone,
          label: 'orderForm.mainInfo.phone',
          error: errors.phoneError,
          type: 'phone',
          minLength: 13,
          maxLength: 13
        }
      ],
      address: [
        {
          name: 'street',
          value: street,
          label: 'orderForm.addressInfo.street',
          error: errors.streetError,
          type: 'text',
          minLength: 3,
          maxLength: 100
        },
        {
          name: 'house',
          value: house,
          label: 'orderForm.addressInfo.house',
          error: errors.houseError,
          type: 'text',
          maxLength: 50
        },
        {
          name: 'entrance',
          value: entrance,
          label: 'orderForm.addressInfo.entrance',
          error: errors.entranceError,
          type: 'text',
          maxLength: 50
        },
        {
          name: 'storey',
          value: storey,
          label: 'orderForm.addressInfo.storey',
          error: errors.storeyError,
          type: 'text',
          maxLength: 50
        }
      ],
      payment: [
        {
          label: 'orderForm.paymentInfo.paymentCash',
          name: 'cash',
          value: 'cash'
        },
        {
          label: 'orderForm.paymentInfo.paymentCard',
          name: 'card',
          value: 'card'
        }
      ]
    }),
    [
      userName,
      email,
      phone,
      street,
      house,
      entrance,
      storey,
      errors.userNameError,
      errors.emailError,
      errors.phoneError,
      errors.streetError,
      errors.houseError,
      errors.entranceError,
      errors.storeyError
    ]
  )
  const handleChange = e => {
    const { name, value } = e.target
    setUserOrder({ ...userOrder, [name]: value })
  }
  const validate = () => {
    const { phone, street, house, entrance, storey } = userOrder
    const { phoneError, storeyError, streetError, entranceError, houseError } =
      errors

    if (!phone || phone.length < 13) {
      setErrors({ ...errors, phoneError: 'orderForm.orderErrors.phone' })
    }
    if (!storey) {
      setErrors({ ...errors, storeyError: 'orderForm.orderErrors.storey' })
    }
    if (!street) {
      setErrors({ ...errors, streetError: 'orderForm.orderErrors.street' })
    }
    if (!entrance) {
      setErrors({ ...errors, entranceError: 'orderForm.orderErrors.entrance' })
    }
    if (!house) {
      setErrors({ ...errors, houseError: 'orderForm.orderErrors.house' })
    }
    if (
      phoneError ||
      storeyError ||
      streetError ||
      entranceError ||
      houseError
    ) {
      setErrors({
        phoneError,
        storeyError,
        streetError,
        entranceError,
        houseError
      })
      return false
    }

    return true
  }
  return (
    <>
      {isModalVisible ? (
        <div className="order-modal">
          <Modal modalVisibility={setIsModalVisible} />
        </div>
      ) : (
        <form className="order-form">
          <div className="order-form__header-container">
            <h1 className="order-form__info">{t('orderForm.main')}</h1>
            {orderData.mainInfo.map(
              (
                { name, value, label, error, type, maxLength, minLength },
                index
              ) => (
                <Input
                  key={index}
                  name={name}
                  value={value}
                  label={t(label)}
                  error={t(error)}
                  type={type}
                  required={true}
                  onChange={handleChange}
                  maxLength={maxLength}
                  minLength={minLength}
                />
              )
            )}
          </div>
          <div className="order-form__body-container">
            <h1 className="order-form__info">{t('orderForm.address')}</h1>
            {orderData.address.map(
              ({ name, value, label, error, type }, index) => (
                <Input
                  key={index}
                  name={name}
                  value={value}
                  label={t(label)}
                  error={error}
                  type={type}
                  onChange={handleChange}
                />
              )
            )}
          </div>
          <div className="order-form__footer-container">
            <h1 className="order-form__info">{t('orderForm.payment')}</h1>

            {orderData.payment.map(({ label, name, value }, index) => (
              <div key={index} className="order-form__group">
                <label className="order-form__label">{t(label)}</label>
                <input
                  onChange={e =>
                    setUserOrder({
                      ...userOrder,
                      payment: e.target.value
                    })
                  }
                  value={value}
                  type="radio"
                  name={name}
                  id={name}
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            onClick={orderSubmit}
            className="order-form__button"
          >
            {t('orderForm.orderButton')}
          </button>
        </form>
      )}
    </>
  )
}

export default OrderForm
