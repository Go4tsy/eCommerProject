import React from 'react';

const Footer = () => {
    return (
        <div className='footerContainer'>
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
    </div>
    );
};

export default Footer;