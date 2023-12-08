import Link from 'next/link';
import React from 'react';

const ContactInner = () => {
    return (
        <>
            <section className="contact-details">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>

                            <form id="contact_form" name="contact_form" method="post" netlify netlify-honeypot="bot-field">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="name" className="form-control" type="text" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="email" className="form-control required email" type="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="subject" className="form-control required" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="phone" className="form-control" type="text" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="mb-3">
                                    <input type="hidden" name="form-name" value="contact_form" />
                                    <input name="bot-field" className="form-control" type="hidden" value="" />
                                    <button type="submit" className="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                                    <button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button>
                                </div>
                            </form>

                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right mt-md-50">
                                <div className="sec-title">
                                    <span className="sub-title">Need any help?</span>
                                    <h2>Get in touch with us</h2>
                                    <div className="text"><span class="fw-bold">We offer a free consultation, so there&apos;s no risk in getting in touch.</span> Simply fill out the form and we&apos;ll be in touch shortly.</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li>
                                        <div className="icon bg-theme-color2">
                                            <span className="lnr-icon-phone-plus"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Have any question?</h6>
                                            <a href="tel:+917560056003">+91 75600 56003</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="lnr-icon-envelope1"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Write email</h6>
                                            <a href="mailto:systems@altalya.com">systems@altalya.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="lnr-icon-location"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Visit anytime</h6>
                                            <span>Refer map for location</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid p-0">
                    <div className="row">
                        <iframe src="https://maps.google.com/maps?q=altalya%20solutions,%20tiruppur&t=&z=19&ie=UTF8&iwloc=&output=embed" data-tm-width="100%" height="500" allowfullscreen=""></iframe>
                    </div>
                </div>
            </section>


        </>
    );
};

export default ContactInner;