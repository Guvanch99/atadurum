import { authReducer } from './reducer'
import {
  signUp,
  login,
  isUserExist,
  logOut,
  userNotFound
} from './actionCreator'

const state = {
  user: null,
  userExist: false,
  userNotFound: false
}

let reducer = action => authReducer(state, action)

describe('auth reducer tree', () => {
  it('user sign-up', () => {
    let newUser = {
      userName: 'Guvanch',
      email: 'awediyewguwanc@gmail.com',
      password: 'Guvanch99'
    }
    let { user } = reducer(signUp(newUser))
    expect.assertions(4)
    expect(user && typeof user === 'object').toBe(true)
    expect(user).not.toEqual(null)
    expect(user).not.toBeUndefined()
    expect(user).toHaveProperty('userName', 'email', 'password')
  })
  it('user login', () => {
    let newUser = {
      userName: 'Guvanch',
      password: 'Guvanch99'
    }
    let { user } = reducer(login(newUser))
    expect.assertions(4)
    expect(user && typeof user === 'object').toBe(true)
    expect(user).not.toEqual(null)
    expect(user).not.toBeUndefined()
    expect(user).toHaveProperty('userName', 'email', 'password')
  })
  it('if user registered before', () => {
    let { userExist } = reducer(isUserExist())
    expect.assertions(1)
    expect(userExist).toBe(true)
  })
  it('if user never registered', () => {
    let newState = reducer(userNotFound())
    expect.assertions(1)
    expect(newState.userNotFound).toBe(true)
  })
  it('user log out', () => {
    let { user } = reducer(logOut())
    expect.assertions(1)
    expect(user).toBeNull()
  })
})
