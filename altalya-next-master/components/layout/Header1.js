import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import LogoWhite from './../../public/images/logo.png';
import LogoDark from './../../public/images/logo-2.png';

const Header1 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo"><Link href="/"><Image src={LogoWhite} title='Altalya' /></Link></div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <NavLinks extraClassName="header1" />
                        </nav>
                        <div className="outer-box">
                            <Link href="tel:+917560056003" className="info-btn">
                                <i className="icon fa fa-phone" />
                                <small>Call or Whatsapp us</small><br /> +91 75600 56003
                            </Link>  
                                        
                            <Link href="mailto:systems@altalya.com" className="info-btn">
                                <i className="icon lnr-icon-envelope" />
                                <small>Send Email</small><br/>systems@altalya.com
                            </Link>
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoDark} title='Altalya' /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+917560056003">+91 75600 56003</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:systems@altalya.com">systems@altalya.com</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">OFFICE HOURS</span>
                                        Mon - Sat 10:00 - 08:00, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                        <li><Link href="https://www.facebook.com/altalya.solutions"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="https://www.instagram.com/altalya.solutions"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo">
                                <Link href="/" title><Image src={LogoWhite} title='Edulrns' /></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <MobileMenu />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



        </>
    );
};

export default Header1;