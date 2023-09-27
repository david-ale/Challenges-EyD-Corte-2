import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FirstApp} from './Challenge01 - FirstApp/FirstApp.jsx'
import { SecondApp } from './Challenge02 - buttons/SecondApp.jsx'
import { GifExpertApp } from './Challenge03 - categories/ComponentApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title = 'My First App' />
    <SecondApp/>
    <GifExpertApp/>
  </React.StrictMode>,
)
