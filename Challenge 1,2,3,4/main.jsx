import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Challenge4}  from './Challenge4.jsx'
import Challenge3  from './Challenge3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Challenge3/>
    <Challenge4/>
  </React.StrictMode>,
)
