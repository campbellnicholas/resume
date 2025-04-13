import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { AnnotationProvider } from './context/AnnotationContext'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AnnotationProvider>
        <App />
      </AnnotationProvider>
    </ThemeProvider>
  </StrictMode>,
)
