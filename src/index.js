import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import App from './app'
import { ThemeState } from './context/'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeState>
        <App />
      </ThemeState>
    </Provider>
  </Router>,
  document.getElementById('root')
)
