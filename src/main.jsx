import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Color from './components/Color.jsx'
import Count2 from './components/Count.jsx'
import Stateprg from './components/Stateprg.jsx'
import Effect from './components/Effect.jsx'
import Fetchapi from './components/Fetchapi.jsx'
import FetchUser from './components/FetchUser.jsx'
import Promise2 from './components/ Promise.jsx'
import Fetch from './components/Fetch.jsx'
import Countprg from './components/Countprg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countprg />
  </StrictMode>,
)
