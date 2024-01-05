import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand navbar-dark bg-dark">
      <div className='container-fluid' >
        <Navbar.Brand href="#home"> <CiShop size="1.5em" color="#ffc107" /> eShop</Navbar.Brand>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary nav-input-button bg-warning" type="button"><FaSearch /></button>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='active d-flex flex-column'>
              <small>Hello</small> 
              <strong>Guest</strong>
            </Nav.Link>
            <Nav.Link href="#link" className='active d-flex flex-column'>
              <small>Your</small> 
              <strong>Shop</strong>
            </Nav.Link>
            <Nav.Link href="#link">
              <LuShoppingCart className='text-white ms-1' /> <span className='text-white ms-2'>0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    
  );
}

export default BasicExample;