import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'




function Navigation({getProducts,  setSearchString, searchString}) {



    let navigate = useNavigate()




    function handleChange(event) {
        setSearchString(event.target.value);
      
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        getProducts()
        navigate('/Search') 
        console.log(searchString)
       
      }

    return (
        <>
            {/* change the href for the link of the page? */}
            <div className='topNav'> <a href="/"> Rosée Esthétique<FontAwesomeIcon icon={faArrowRight} /> </a></div>

            <Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand href="/home" className=''> <img src='/Images/smallLogo.png' alt='smallLogo' ></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <NavDropdown title="Care Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Care_Services/Hair_removal">Hair removal</NavDropdown.Item>
                                <NavDropdown.Item href="/Care_Services/Facial_care">
                                    Facial care
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/Care_Services/Fat_burning">Fat burning</NavDropdown.Item>
                                <NavDropdown.Item href="/Care_Services/Lashes">
                                    Lashes
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Trainings" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Trainings/Online_training">Online trainings</NavDropdown.Item>
                                <NavDropdown.Item href="/Trainings/InPerson_training">
                                    In-Person trainings
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/Trainings/Book">E-Book Course</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Shop Products" id="basic-nav-dropdown">
                                <NavDropdown title="Skin product" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/ShopProducts/SkinProduct/Cleansers">Cleansers</NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/SkinProduct/Exfoliant">
                                        Exfoliants
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/SkinProduct/Moisturizers">Moisturizers</NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/SkinProduct/Masks">
                                        Masks
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/SkinProduct/Sunscreen">
                                        Sunscreen
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/SkinProduct/Hydrojelly_Masks">
                                        Hydrojelly masks
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Products for Waxing" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/ShopProducts/ProductsForWaxing/Hard_Wax">Hard wax</NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/ProductsForWaxing/Soft_wax">
                                        Soft wax
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/ProductsForWaxing/Roll_on_wax">Roll-on wax</NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/ProductsForWaxing/Wax_warmers">
                                        Wax warmers
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/ShopProducts/ProductsForWaxing/Waxing_treatments">
                                        Waxing treatments
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item href="/ShopProducts/All_lash_products">All Lash Products</NavDropdown.Item>
                                <NavDropdown.Item href="/ShopProducts/Accessories">
                                    Accessories
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* when click on loop, toggle search bar else just be a loop button */}
                    <div className='SearchBtn'>
                    <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          onChange={handleChange}
          
          required     
        />
                        <Button type="ReactRef" >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
        </form>
                    </div>

                    {/* <div className="CartBtn">
                        <Nav.Link href='/cart'>
                            <Button>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </Button>
                        </Nav.Link>
                    </div> */}
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;