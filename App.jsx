
import { Route, Routes } from 'react-router'
import './App.css'
import Layouts from './MainLayouts/Layouts/Layouts'
import Home from './Pages/Home/Home'

function App() {

  return (
    
    <Routes>
    <Route path='/' element={<Layouts/>}>
    <Route path='/' element={<Home/>}/>
    </Route>
    </Routes>
    
  )
}

export default App
