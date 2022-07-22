import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ListGroup from 'react-bootstrap/ListGroup';



function Home() {
    return (
        <>
        <div  className='containerHome'>
            <Card>
                <div className='cardImageContainer'>
                <Card.Img  variant="top" src="/Images/brandlogo.jpeg" alt='logo' />
                <Card.Body>
                    <div className='cardBodyContainer'>
                    <h5 className="card-title">Beauty, Passion and Perfection</h5>
                    <Card.Text>
                        
                        We're always striving to make you feel the best that you can be. Our
                        mission is to push you to become the <br/> best version of yourself by
                        giving you the best products and services.
                        
                    </Card.Text>
                    </div>
                </Card.Body>
                </div>
            </Card>
            </div>
            {/* --------------------------------- Collection part --------------------------------- */}
                <header className='cardName'>
                    Collection
                </header>
            <CardGroup className='CardContainer'>
                <Card className='CardSection'>
                        <Card.Link href="/Collection/InPerson_training">
                        <Card.Img variant="top" src="/Images/wax.jpg" alt='WaxDemo' />
                        <Card.Body>
                            <Card.Title>1-1 In-Person Trainings <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card className='CardSection' > 
                    <Card.Link href="/Collection/All-Skin-Care-Product">
                        <Card.Img variant="top" src="/Images/products.jpeg" alt='Products' />
                        <Card.Body>
                            <Card.Title> All Skincare Products <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card className='CardSection'>
                    <Card.Link href="/Collection/WaxBible-eBook">
                        <Card.Img variant="top" src="/Images/ebook.png" alt='OnlineBook' />
                        <Card.Body>
                            <Card.Title> The WAX BIBLE (E-BOOK) <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </CardGroup>
            {/* ----------------------- Schedule part ------------------- */}
            <div className='scheduleContainer'>
            <ListGroup className='Schedule'>
                <h1 className='title'>OPENING TIME</h1>
                <ListGroup.Item > MONDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item > TUESDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item > WEDNESDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item > THURSDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item > FRIDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item > SATURDAY | 10:00AM - 21:00PM </ListGroup.Item>
                <ListGroup.Item > SUNDAY | CLOSED </ListGroup.Item>
                </ListGroup>
                <div className='imageSect'>
                <img  src='/Images/room.jpg' alt='room'  className='scheduleImagos'/>
                </div>
            </div>
            {/* -------------- footer part ----------- */}
            {/* <div className='footerContainer'>
                <div className='footerContent'>
                    <div className='footerHeader'>
                        <h1 className='footerText'> Quick Links</h1>
                       
                        <ul className='searchsec'>
                            <li> <a href="/search" className="linkSearch"> Search </a></li>
                        </ul>
                        <div className='footerLink'>
                            <ul className='LogosContainer'>
                                <li className='logos'>

                                    <a href="https://www.instagram.com/roseeesthetique/" className="linkLogos">
                                        <img  src='/Images/instagram.png' alt='instagram' className='socialmedia' />
                                    </a>
                                    <a href="https://www.tiktok.com/@roseeesthetique" className="linkLogos">
                                        <img src='/Images/tiktok.png' alt='tiktok' className='socialmedia'/>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC4q8xZvODayoaBQIUVoYbXg" className="linkLogos">
                                        <img src='/Images/youtube.jpg' alt='youtube'  className='socialmedia'/>
                                    </a>
                                    

                                </li>
                            </ul>
                            <div className='footerBottom'>
                                © 2022,
                                <a href='/' title className='copyright'> roseeesthethique </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Home;