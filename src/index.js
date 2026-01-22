
import App from './App'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

let div = document.getElementById('root')

let root = ReactDOM.createRoot(div)

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)





