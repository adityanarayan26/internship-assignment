import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MyContextProvider } from './store/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyContextProvider>

        <App />
      </MyContextProvider>
    </BrowserRouter>


  </StrictMode>,
)
