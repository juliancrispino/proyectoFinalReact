import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain='dev-46mu06in.us.auth0.com' clientId='YBQlPZDuH3s85wAWERybZDHQoZdp2ERM' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
