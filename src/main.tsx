import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Navigator from './Navigator.tsx'
import Header from './components/header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    
    <Header />    
    <Navigator />

    {/* <StrictMode>
      <App />
    </StrictMode> */}
  </BrowserRouter>
)
