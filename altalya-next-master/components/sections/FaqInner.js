import React from 'react';
import Accordion from '../elements/Accordion';
import syllabus from '../../util/Intropage';

const FaqOne = () => {
    return (
        <>
            <section className="faqs-section pt-100 pb-100">
                <div className="auto-container">
                    <div className="row">
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <Accordion syllabus={syllabus}/>
                        </div>
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <Accordion syllabus={syllabus}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqOne;