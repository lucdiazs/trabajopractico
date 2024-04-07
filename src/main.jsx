import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import MyContextProvider from './context/MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>

    <BrowserRouter>
    
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    
    </BrowserRouter>

  </MyContextProvider>
)