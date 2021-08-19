import { useState, useCallback, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import classNames from 'classnames'

import { Sidebar, Navbar, Footer, PrivateRoute } from '../components'

import {
  Home,
  Menu,
  About,
  SingleProduct,
  Login,
  SignUp,
  Cart,
  CheckOut,
  Promotions
} from '../pages'

import './index.scss'
import { useTheme } from '../hooks'

const App = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true)
  const { themeDark } = useTheme()

  const sidebarVisibilityToggle = useCallback(
    () => setSidebarVisibility(prevState => !prevState),
    []
  )

  useEffect(() => {
    document.body.style.background = themeDark ? '#1d3c45' : 'white'
  }, [themeDark])

  const Bar = isSidebarVisible ? Navbar : Sidebar

  return (
    <div className={classNames('container', { 'is-darkGreen': themeDark })}>
      <Bar sidebarVisibilityToggle={sidebarVisibilityToggle} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/menu/:id" children={<SingleProduct />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/promotions" component={Promotions} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/checkout">
            <CheckOut />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
