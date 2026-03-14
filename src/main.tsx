/**
 * Application entry point. Mounts the React app into the DOM.
 * - createRoot (React 18) replaces the legacy ReactDOM.render.
 * - StrictMode helps catch side effects and deprecated APIs during development.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// #root is defined in index.html; required for Vite/SPA mounting
const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
)
