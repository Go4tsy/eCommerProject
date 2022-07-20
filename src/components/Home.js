import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ListGroup from 'react-bootstrap/ListGroup';


function Home() {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="/Images/brandlogo.jpeg" alt='logo' />
                <Card.Body>
                    <h5 className="card-title">Beauty, Passion and Perfection</h5>
                    <Card.Text>
                        We're always striving to make you feel the best that you can be. Our
                        mission is to push you to become the best version of yourself by
                        giving you the best products and services.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* --------------------------------- Collection part --------------------------------- */}
            <CardGroup className='CardContainer'>
                <Card>
                    <Card.Link href="#">
                        <Card.Img variant="top" src="/Images/wax.jpg" alt='WaxDemo' />
                        <Card.Body>
                            <Card.Title>1-1 In-Person Trainings <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href="#">
                        <Card.Img variant="top" src="/Images/products.jpeg" alt='Products' />
                        <Card.Body>
                            <Card.Title> All Skincare Products <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href="#">
                        <Card.Img variant="top" src="/Images/ebook.png" alt='OnlineBook' />
                        <Card.Body>
                            <Card.Title> The WAX BIBLE (E-BOOK) <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </CardGroup>
            {/* ----------------------- Schedule part ------------------- */}
            <ListGroup className='Schedule'>
                <h1 className='title'>OPENING TIME</h1>
                <ListGroup.Item> MONDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item> TUESDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item> WEDNESDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item> THURSDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item> FRIDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item> SATURDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item> SUNDAY | CLOSED </ListGroup.Item>
            </ListGroup>
            <span>
                <img src='/Images/room.jpg' alt='room' />
            </span>
            {/* -------------- footer part ----------- */}
            <div className='footerContainer'>
                <div className='footerContent'>
                    <div className='footerHeader'>
                        Quick Links
                        <ul>
                            <li> <a href="/search" className="linkSearch"> Search </a></li>
                        </ul>
                        <div className='footerLink'>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/roseeesthetique/" className="linkLogos">
                                        <img src='/Images/instagram.png' alt='instagram' />
                                    </a>
                                    <a href="https://www.tiktok.com/@roseeesthetique" className="linkLogos">
                                        <img src='/Images/tiktok.png' alt='tiktok' />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC4q8xZvODayoaBQIUVoYbXg" className="linkLogos">
                                        <img src='/Images/youtube.jpg' alt='youtube' />
                                    </a>
                                </li>
                            </ul>
                            <div className='footerBottom'>
                                © 2022,
                                <a href='/' title> roseeesthethique </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;