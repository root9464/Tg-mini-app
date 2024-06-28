import {SDKProvider} from '@tma.js/sdk-react'
import eruda from 'eruda'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

eruda.init()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKProvider>
      <App />
    </SDKProvider>
  </React.StrictMode>,
)
