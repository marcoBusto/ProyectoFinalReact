import { Navbar,Nav,Container,NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import CartWidget from "../components/CartWidget/CarWidget"
import Section from "./Section"

const NavBarTienda = () =>{
    return(
        <>
          <Navbar expand="md" variant="dark" id="menu">
          <div id="izq-menu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="./Inicio">Home</Nav.Link>
                <Nav.Link as={Link} to="./Camisetas">Camisetas</Nav.Link>
                <Nav.Link as={Link} to="./Mates">Mates y Accesorios</Nav.Link>     
              </Nav>
            </Navbar.Collapse>
          </div>
          <div id="icono-cart" variant="dark">
            <CartWidget/>
          </div>
        </Navbar>
        <Section><Outlet></Outlet></Section>
      </>
    )
}
export default NavBarTienda