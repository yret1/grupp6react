import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wallet from './pages/Wallet'
import Topcomponent from './components/Topcomponent'

function App() {



  return (
  <BrowserRouter>

    <Topcomponent />
    
    <Routes>
      
      <Route index path ="/" element={<Wallet />} />
    
    </Routes>

  </BrowserRouter>
  )
}

export default App
