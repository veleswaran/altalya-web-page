import Link from 'next/link';
import React from 'react';

const FeatureTwo = () => {
    return (
        <>
            <section className="features-section-two pt-0">
                <div className="anim-icons">
                    <span className="icon icon-shape-1 zoom-one" />
                    <span className="icon icon-shape-2 zoom-one" />
                    <span className="icon icon-e zoom-one" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our Advantages</span>
                        <h2>You’ve come to the right <br />place to learn</h2>
                    </div>
                    <div className="row">
                        {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <figure className="image"><img src="images/resource/feature-2.png" title="Edulrns" /></figure>
                                <h4 className="title"><Link href="/page-about">Learn from industry experts</Link></h4>
                                <div className="text">Our courses are led by experienced instructors who have years of experience in the software industry. You&apos;ll learn from the best and gain practical knowledge that you can apply in the real world.</div>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box ">
                                <figure className="image"><img src="images/resource/feature-3.png" title="Edulrns" /></figure>
                                <h4 className="title"><Link href="/page-about">Hands-on learning</Link></h4>
                                <div className="text">Our courses include hands-on projects that give you real-world experience in software development. Learn to code with real-world projects and build a portfolio to impress employers.</div>
                            </div>
                        </div>
                       {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box ">
                                <figure className="image"><img src="images/resource/feature-1.png" title="Edulrns" /></figure>
                                <h4 className="title"><Link href="/page-about">Flexible learning options</Link></h4>
                                <div className="text">Our courses are designed to fit your busy schedule. You can learn at your own pace and on your own schedule, with access to our course materials and instructors whenever you need them.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureTwo;