import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleProvider from './contextApi/ToggleProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </StrictMode>,
)
