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
