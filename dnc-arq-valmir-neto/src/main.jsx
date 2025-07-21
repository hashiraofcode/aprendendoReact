import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'

// CONTEXT
import { AppProvider } from './context/textsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </StrictMode>,
)
