import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight, faMagnifyingGlass, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button'


function Navigation() {
  return (
   <>
     <div className='topNav'>Rosée Esthétique <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></div> 

    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"> <img src='/Images/smallLogo.png' alt='smallLogo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Care Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hair removal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Facial care
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fat burning</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Lashes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Trainings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Online trainings</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">
                In-Person trainings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">E-Book Course</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop Products" id="basic-nav-dropdown">
              <NavDropdown title="Skin product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/5.1">Cleansers</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">
                Exfoliants
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Moisturizers</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.4">
                Masks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.5">
                Sunscreen
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.6">
                Hydrojelly masks
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products for Waxing" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/6.1">Hard wax</NavDropdown.Item>
              <NavDropdown.Item href="#action/6.2">
                Soft wax
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/6.3">Roll-on wax</NavDropdown.Item>
              <NavDropdown.Item href="#action/6.4">
                Wax warmers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/6.5">
                Waxing treatments
              </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#action/7.1">All Lash Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

            {/* when click on loop, toggle search bar else just be a loop button */}
            <div className='SearchBtn'>
            <input id="SearchBar"  type="text" placeholder='search' ></input>
            <Button type="ReactRef"> 
            <FontAwesomeIcon icon={faMagnifyingGlass} />
             </Button>
             </div>
    
            <div className="CartBtn">
            <Button>
           <FontAwesomeIcon icon={faShoppingBag} />
             </Button>
             </div>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;