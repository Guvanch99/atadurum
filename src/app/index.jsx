import { useState, useCallback } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Sidebar, Navbar, Footer, PrivateRoute } from '../components'

import {
  Home,
  Menu,
  About,
  SingleProduct,
  Login,
  SignUp,
  Cart,
  CheckOut
} from '../pages'

import './index.scss'

const App = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true)

  const sidebarVisibilteToggle = useCallback(
    () => setSidebarVisibility(prevState => !prevState),
    []
  )

  const Bar = isSidebarVisible ? Navbar : Sidebar

  return (
    <div className="container">
      <Bar sidebarVisibilteToggle={sidebarVisibilteToggle} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/:id" children={<SingleProduct />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/checkout">
          <CheckOut />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
