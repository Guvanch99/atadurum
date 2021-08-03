import { useState, useCallback } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Sidebar, Navbar, Footer } from '../components'

import { Home, Menu, About, SingleProducts } from '../pages'

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
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/:id" children={<SingleProducts />} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
