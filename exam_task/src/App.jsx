
import './App.css'
import CatFact from './assets/Pages/CatFact'
import SpeedCalculator from './assets/Pages/SpeedCalculator'
import Deatils from './assets/Pages/Deatils'
import { Route,Routes } from 'react-router-dom'
import Landing from './assets/Pages/Landing'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<SpeedCalculator/>}/>
      <Route path='/home' element={<Landing/>}/>
      <Route path='/cat' element={<CatFact/>}/>
      <Route path='/details' element={<Deatils/>}/>
    </Routes>
      
    </>
  )
}

export default App
