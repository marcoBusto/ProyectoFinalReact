import './App.css'
import { BrowserRouter, Navigate, Routes,Route } from 'react-router-dom'
//importamos los componentes creados //
import Inicio from './components/views/Inicio'
import Camisetas from './components/views/Camisetas'
import Mates from './components/views/Mates'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Section from './layouts/Section'


//importamos la nav bar //
import Navbar from './layouts/Navbar'

import { Container } from 'react-bootstrap'



function App() {
  return (
    <>
    <Container>
    <Header/>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Navbar/>}>
           <Route index  element={<Inicio/>}/>
           <Route path='Camisetas'  element={<Camisetas/>}/>
           <Route path='Mates'  element={<Mates/>}/>
           <Route path='*' element={ <Navigate replace to="/"/>} />
           </Route>
        </Routes>
      </BrowserRouter>
     <Section/>
    <Footer/>
    </Container>
    </>
  )
}

export default App
