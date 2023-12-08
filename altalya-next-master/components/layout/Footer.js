import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image zoom-two" style={{ backgroundImage: 'url(/images/background/4.jpg)' }} />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><img src="/images/logo-2.png" alt="Altalya" title="Altalya" /></Link></div>
                                    <div className="text">Get trained from the experts</div>
                                    <ul className="social-icon-two">
                                        <li><Link href="https://www.facebook.com/altalya.solutions"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link href="https://www.instagram.com/altalya.solutions"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul className="user-links">
                                        <li><Link href="#">Gallery</Link></li>
                                        <li><Link href="#">Testimonials</Link></li>
                                        <li><Link href="#">FAQ&apos;s</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Links</h4>
                                    <ul className="user-links">
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Courses</Link></li>
                                        <li><Link href="#">Instructor</Link></li>
                                        <li><Link href="#">Events</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h4 className="widget-title">Contact</h4>
                                    <div className="widget-content">
                                        <ul className="contact-info">
                                            <li><i className="fa fa-phone-square" /> <Link href="tel:+917560056003">+91 75600 56003</Link></li>
                                            <li><i className="fa fa-envelope" /> <Link href="mailto:systems@altalya.com">systems@altalya.com</Link></li>
                                            <li><i className="fa fa-map-marker-alt" />1/1135-H2, Dharapuram Main Rd,opp. to Meenakshi Hospital, Chenniyappa colony, Podhikai Nagar, K Chettipalayam, Tiruppur, Tamil Nadu 641608</li>
                                        </ul>
                                        <div className="subscribe-form">
                                            <form method="post" action="#">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                    <button type="button" className="theme-btn btn-style-one"><i className="fa fa-long-arrow-alt-right" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023 by  <Link href="/">altalya.com</Link></div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    );
};

export default Footer;