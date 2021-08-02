import { useState, useCallback } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Sidebar, Navbar, Footer } from '../components'
import Home from '../pages/home'
import About from '../pages/about'
import Menu from '../pages/products'

import './index.scss'

const App = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true)

  const sidebarVisibilteToggle = useCallback(
    () => setSidebarVisibility(prevState => !prevState),
    []
  )
  return (
    <div className="container">
      {isSidebarVisible ? (
        <Navbar sidebarVisibilteToggle={sidebarVisibilteToggle} />
      ) : (
        <Sidebar sidebarVisibilteToggle={sidebarVisibilteToggle} />
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
