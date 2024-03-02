import './App.css'
import { BrowserRouter, Navigate, Routes,Route } from 'react-router-dom'
//importamos los componentes creados //
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Section from './layouts/Section'


//importamos la nav bar //
import Navbar from './layouts/Navbar'

import { Container } from 'react-bootstrap'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
 

function App() {
  return (
    <>
    <Container>  
    <Header/>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Navbar/>}>
           <Route path='/:categoria'  element={<ItemListContainer/>}/>
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
