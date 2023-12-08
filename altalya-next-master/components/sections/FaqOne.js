import React from 'react';
import Accordion from "../elements/Accordion";
import syllabus from '../../util/Intropage';

const FaqOne = () => {
    return (
        <>
            <section className="faqs-section">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/5.jpg)' }} />
                <div className="auto-container">
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="faq-bg" />
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our faqs</span>
                                    <h2>Frequently asked some questions?</h2>
                                </div>
                                <Accordion syllabus={syllabus}/>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <figure className="image"><img src="images/resource/faq.jpg" title="Altalya" alt="Altalya" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqOne;