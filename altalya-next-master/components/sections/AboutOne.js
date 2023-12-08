import Link from 'next/link';
import React from 'react';

const AboutOne = () => {
    return (
        <>
            <section className="about-section">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Get to know us</span>
                                    <h2>Why Altalya?</h2>
                                    <div className="text">Altaly is a DPIIT-recognized startup focused on upskilling individuals to help them achieve their dream careers in the IT industry. Our company&apos;s vision is to transform individuals skills, turning hands into minds! We strive to contribute to India&apos;s journey towards a trillion-dollar economy, even if it is through smaller, impactful steps.</div>
                                </div>
                                <ul className="list-style-one two-column">
                                    <li><i className="icon fa fa-check" /> Expert trainers</li>
                                    <li><i className="icon fa fa-check" /> Cutting edge curriculum</li>
                                    <li><i className="icon fa fa-check" /> Real-time Projects Hands-on</li>
                                    <li><i className="icon fa fa-check" /> Comprehensive placement support</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="anim-icons">
                                <span className="icon icon-dotted-map-2" />
                                <span className="icon icon-paper-plan" />
                                <span className="icon icon-dotted-line" />
                            </div>
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-1.jpg" title="Altalya" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-2.jpg" title="Altalya" /></figure>
                                <div className="experience bounce-y"><span className="count">10+</span> Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOne;