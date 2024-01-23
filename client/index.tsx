import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { store } from './state/store'
import { Provider } from 'react-redux'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
