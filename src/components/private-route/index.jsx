import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({ children, ...rest }) => {
  const user = true
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/" />)}
    ></Route>
  )
}

export default PrivateRoute
