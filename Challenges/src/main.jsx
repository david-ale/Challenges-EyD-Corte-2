import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FirstApp} from './Challenge01 - FirstApp/FirstApp.jsx'
import { SecondApp } from './Challenge02 - buttons/SecondApp.jsx'
import { GifExpertApp } from './Challenge03 - categories/ComponentApp.jsx'
import { GifGrid } from './Components/./Challenge04 - gifs/GifGrid'
import {Counter} from "./Components/Counter.jsx"
import { MultipleCustomHook } from './Components/Challenge08 - breakingbad/MultipleCustomHook.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title = 'My First App' />
    <Counter value ={0}/>
    <GifExpertApp/>
    <MultipleCustomHook/>
    <GifGrid category={"cats"}/>
  </React.StrictMode>,
)
