import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import PizzaDetail from './components/PizzaDetail'
import NotFound from './views/NotFound'
import Carrito from './views/Carrito'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/pizzas/:id' element = {<PizzaDetail/>}/>
        <Route path='/carrito' element = {<Carrito/>} />
        <Route path='*' element = {<NotFound/>} />
      </Routes>
    </>
  )
}

export default App