import { useState, useCallback, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Sidebar, Navbar, Footer, PrivateRoute } from '../components'
import {
  Home,
  Menu,
  About,
  SingleProduct,
  Login,
  Register,
  Cart,
  CheckOut,
  Promotions
} from '../pages'
import {
  ROUTER_HOME,
  ROUTER_ABOUT,
  ROUTER_MENU,
  ROUTER_PROMOTIONS,
  ROUTER_SINGLE_PRODUCT,
  ROUTER_CART,
  ROUTER_LOGIN,
  ROUTER_SIGN_UP,
  ROUTER_CHECKOUT
} from '../constants'
import { useTheme } from '../hooks'
import { getFromLocaleStorage } from '../utils'
import {
  countTotal,
  getMenuFromLocaleStorage
} from '../redux/cart/actionCreators'

import './index.scss'

const App = () => {
  const dispatch = useDispatch()
  const { themeDark } = useTheme()
  const { i18n } = useTranslation('translation')
  const { cart } = useSelector(state => state.cart)

  const [isSidebarVisible, setSidebarVisibility] = useState(true)
  const [lang, setLang] = useState('en')

  const sidebarVisibilityToggle = useCallback(
    () => setSidebarVisibility(prevState => !prevState),
    []
  )

  const changeLanguageHandler = useCallback(
    e => {
      setLang(e.target.value)
      i18n.changeLanguage(e.target.value)
    },
    [i18n]
  )

  useEffect(() => {
    const darkgreenColor = '#1d3c45'
    const whiteColor = '#fff'
    document.body.style.background = themeDark ? darkgreenColor : whiteColor
  }, [themeDark])

  useEffect(() => {
    document.body.style = !isSidebarVisible
      ? 'overflow:hidden'
      : 'overflow-x:hidden'
  }, [isSidebarVisible])

  useEffect(() => {
    const cart = getFromLocaleStorage('cart')
    const gift = getFromLocaleStorage('gift')
    dispatch(getMenuFromLocaleStorage({ cart, gift }))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(countTotal())
  }, [cart, dispatch])

  const Bar = isSidebarVisible ? Navbar : Sidebar
  return (
    <div
      className={classNames('container', {
        'is-darkGreen': themeDark,
        'is-sidebar': !isSidebarVisible
      })}
    >
      <Bar
        sidebarVisibilityToggle={sidebarVisibilityToggle}
        lang={lang}
        changeLanguageHandler={changeLanguageHandler}
      />
      <main>
        <Switch>
          <Route exact path={ROUTER_HOME} component={Home} />
          <Route exact path={ROUTER_MENU} component={Menu} />
          <Route path={ROUTER_SINGLE_PRODUCT} children={<SingleProduct />} />
          <Route exact path={ROUTER_ABOUT} component={About} />
          <Route exact path={ROUTER_CART} component={Cart} />
          <Route exact path={ROUTER_PROMOTIONS} component={Promotions} />
          <Route exact path={ROUTER_LOGIN} component={Login} />
          <Route exact path={ROUTER_SIGN_UP} component={Register} />
          <PrivateRoute exact path={ROUTER_CHECKOUT}>
            <CheckOut />
          </PrivateRoute>
          <Redirect to={ROUTER_HOME} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
