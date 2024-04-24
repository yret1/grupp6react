import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Wallet from './pages/Wallet'
import TopComponent from "./components/TopComponent"
import Card from './components/Card'
import CardButton from './components/CardButton'
import CardForm from './components/CardForm'

function App() {


  return (
   <BrowserRouter>
    <TopComponent></TopComponent>
    <Card></Card>
    <CardForm></CardForm>
    <CardButton></CardButton>
    <Routes>
      <Route index path='/' element={<Wallet/>}>

      </Route>
    </Routes>
   </BrowserRouter>
   
  )
}

export default App
