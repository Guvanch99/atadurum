export const getFromLocaleStorage = item => {
  let data = localStorage.getItem(item)
  if (item === 'gift') {
    if (data) {
      return JSON.parse(localStorage.getItem(item))
    } else {
      return null
    }
  } else {
    if (data) {
      return JSON.parse(localStorage.getItem(item))
    } else {
      return []
    }
  }
}
export const isButtonDisabled = (
  userName,
  userEmail,
  userPassword,
  userErrorUserName,
  userErrorEmail,
  userErrorPassword
) =>
  !userName ||
  !userEmail ||
  !userPassword ||
  userErrorUserName ||
  userErrorEmail ||
  userErrorPassword

export const emptyFieldsWithErrors = userEnteredData => {
  let emptyFields = {}
  Object.entries(userEnteredData).forEach(([key, value]) => {
    !value && (emptyFields[key] = "can't be empty")
  })
  return emptyFields
}
