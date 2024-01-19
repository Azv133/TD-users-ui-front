import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainRouter } from './MainRouter'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
)
