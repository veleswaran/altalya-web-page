import React from 'react';

const SignupOne = () => {
    return (
        <>
            <section className="signup-section">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-paper-clip bounce-x" />
                    </div>
                    <div className="outer-box" style={{ backgroundImage: 'url(./images/background/3.jpg)' }}>
                        <span className="float-icon icon-pencil-line wow fadeInUp" />
                        <div className="row">
                            {/* Title Column */}
                            <div className="title-column col-lg-6 col-md-12 col-sm-12">
                                <div className="sec-title light">
                                    <h2>Sign up for a<br />free trial class</h2>
                                    <div className="text">Offline hands-on class in Tiruppur</div>
                                </div>
                            </div>
                            {/* Form Column */}
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* Sign Form */}
                                    <div className="signup-form wow fadeInLeft">
                                        {/*Contact Form*/}
                                        <form method="post" id="callback_form" name="callback_form" netlify netlify-honeypot="bot-field">
                                            <div className="form-group">
                                                <input type="text" name="full_name" placeholder="Your name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email address" />
                                            </div>
                                            <div className="form-group">
                                                <input type="number" name="phone" placeholder="Phone number" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="hidden" name="form-name" value="callback_form" />
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form">Request a Callback</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End Contact Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupOne;