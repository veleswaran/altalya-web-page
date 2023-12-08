import React, {useState} from 'react';
import Link from 'next/link';

const SliderOne = () => {

    return (
        <div className="banner-wrapper">
            <section className="banner-one banner-carousel__one no-dots">
                    <div className="banner-one__slide banner-one__slide-one">
                        <div className="container" style={{paddingBottom:100}}>
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <img src="/images/slider-1-scratch.png" alt="" className="banner-one__scratch" />
                            <img src="/images/main-slider/image-1.png" className="banner-one__person" alt="" />
                            <div className="row no-gutters">
                                <div className="col-xl-12 z-index-1">
                                    <h1 className="banner-one__title banner-one__light-color">Code your <span className="style-font">Success!</span>
                                     <br/>Master in Full-stack development</h1>
                                    <p className="banner-one__tag-line">Get the training you need to succeed <br/>in the tech industry</p>
                                    <Link href="/page-courses" className="theme-btn btn-style-one bg-theme-color2">IT Courses</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}
export default SliderOne;