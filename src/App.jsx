import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wallet from './pages/Wallet'
import Topcomponent from './components/Topcomponent'
import Yellowcard from './components/Yellowcard'
import Cardstack from './components/Cardstack'
import Newcardbtn from './components/Newcardbtn'

function App() {



  return (
  <BrowserRouter>

    <Topcomponent />
    <Yellowcard />
    <Cardstack />
    <Newcardbtn />

    <Routes>
      
      <Route path ="/" element={<Wallet />} />
    
    </Routes>

  </BrowserRouter>
  )
}

export default App
