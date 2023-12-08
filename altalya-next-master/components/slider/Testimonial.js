import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {

    const data = [
        {
            img: "testi-thumb-1.jpg",
            title: "Mohan Raj",
            desig: "Front-end Developer",
            testimonial: "Altalya's full-stack development course was a game-changer for me. With hands-on training and real-world projects, I landed a job at Absolute labs, Chennai even before course completion!"
        },
        {
            img: "testi-thumb-2.jpg",
            title: "Swetha",
            desig: "Student",
            testimonial: "I have taken a course in coding with Apollo and I really thought coding is really hard after it. I don't want to get into coding one more again and after the introductory class I was really excited. I two weeks i actually solved many coding problems myself without any help. Whether you enjoy coding or or you hate it, it does depend a lot on who teaches you"
        },
        {
            img: "testi-thumb-1.jpg",
            title: "Suresh Kannan",
            desig: "Student",
            testimonial: "The online class has been truly fantastic, with the instructor being incredibly patient and promptly addressing any doubts. I thoroughly enjoyed the session, although unfortunately, I couldn't attend the last day of the class. I sincerely appreciate the effort put into organizing such a valuable class"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className=""
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block" key={i}>
                        <div className="inner-box">
                            <div className="content-box">
                                <figure className="thumb"><img src={`images/resource/${item.img}`} title="Edulrns" /></figure>
                                <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                <div className="text">{item.testimonial}</div>
                                <div className="info-box">
                                    <span className="icon-quote" />
                                    <h4 className="name">{item.title}</h4>
                                    <span className="designation">{item.desig}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Testimonial;

