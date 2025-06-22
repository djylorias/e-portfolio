import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Navigator from './Navigator.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    
    <Navigator />

    {/* <StrictMode>
      <App />
    </StrictMode> */}
  </BrowserRouter>
)
