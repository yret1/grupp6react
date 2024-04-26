import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Wallet from './pages/Wallet'
import TopComponent from './components/TopComponent'
import NewCard from './pages/NewCard'
import { useState } from 'react'



function App() {

  const [cards, setCards] = useState([]);



  return (
  <BrowserRouter>

    <TopComponent />

  <Routes >

    <Route index path='/' element={<Wallet cards={cards} />} />
    <Route path='/new' element={<NewCard setCards={setCards} />} />

  </Routes>

  </BrowserRouter>


  )
}

export default App
