import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import LogoWhite from './../../public/images/logo.png';
import LogoDark from './../../public/images/logo-2.png';

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="top-left">
                                <div className="text">Exciting discounts for student. Hurry up!</div>
                            </div>
                            <div className="top-right">
                                <ul className="social-icon-one light">
                                    <li><Link href="https://www.facebook.com/altalya.solutions"><span className="fab fa-facebook-square" /></Link></li>
                                    <li><Link href="https://www.instagram.com/altalya.solutions"><span className="fab fa-instagram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><Image src={LogoWhite} title='Altalya' /></Link></div>
                            </div>
                            <ul className="contact-info-outer">
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">Call or Whatsapp us</span>
                                        <Link href="tel:+917560056003" className="text">+91 75600 56003</Link>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-envelope" />
                                        <span className="title">Send Email</span>
                                        <Link href="mailto:systems@altalya.com" className="text">systems@altalya.com</Link>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-map-marker" />
                                        <span className="title">1/1135-H2, Dharapuram Main Rd,opp. to Meenakshi Hospital</span>
                                        <div className="text">K Chettipalayam, Tiruppur, Tamil Nadu 641608</div>
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile Nav toggler */}
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        {/* Main box */}
                        <div className="main-box">
                            {/*Nav Box*/}
                            <div className="nav-outer">
                                <nav className="nav main-menu">
                                    <NavLinks extraClassName="header2" />
                                </nav>
                                {/* Main Menu End*/}
                                <div className="outer-box">
                                    <Link href="/page-contact" className="theme-btn btn-style-two"><span className="btn-title">Enroll now!</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* End Main Box */}
                    </div>
                </div>
                {/* Header Lower */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    {/*Here Menu Will Come Automatically ViLink Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoDark} title='Altalya' /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fLink fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="tel:+917560056003">+91 75600 56003</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="mailto:systems@altalya.com">systems@altalya.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Office hours</span>
                                    Mon - Sat 10:00 - 08:00, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="https://www.facebook.com/altalya.solutions"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="https://www.instagram.com/altalya.solutions"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/" title><Image src={LogoWhite} title='Altalya' /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <MobileMenu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>
            {/*End Main Header */}



        </>
    );
};

export default Header2;