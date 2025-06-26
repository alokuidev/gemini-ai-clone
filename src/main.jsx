import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleProvider from './contextApi/ToggleProvider'
import PromptProvider from './contextApi/PromptContext'

createRoot(document.getElementById('root')).render(
 <PromptProvider>
    <ToggleProvider>
      <App />
    </ToggleProvider>
 </PromptProvider>
)
