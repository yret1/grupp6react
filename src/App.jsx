import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Wallet from './pages/Wallet'
import TopComponent from './components/TopComponent'
import NewCard from './pages/NewCard'
import { useEffect, useState } from 'react'



function App() {

  const [cards, setCards] = useState([]);


  useEffect(() => {

    console.log(cards)

  }, [cards])


  return (
  <BrowserRouter>

    <TopComponent />

  <Routes >

    <Route index path='/' element={<Wallet />} />
    <Route path='/new' element={<NewCard setCards={setCards} />} />

  </Routes>

  </BrowserRouter>


  )
}

export default App
