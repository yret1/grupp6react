import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Wallet from './pages/Wallet'
import TopComponent from './components/TopComponent'
import NewCard from './pages/NewCard'



function App() {


  return (
  <BrowserRouter>

    <TopComponent />

  <Routes >

    <Route index path='/' element={<Wallet />} />
    <Route path='/new' element={<NewCard />} />

  </Routes>

  </BrowserRouter>


  )
}

export default App
