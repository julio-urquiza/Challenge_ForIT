import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RefreshProvider } from './context/RefreshContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RefreshProvider>
      <App />
    </RefreshProvider>
  </StrictMode>,
)
