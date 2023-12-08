import Link from 'next/link';
import React from 'react';

const CourseTwo = () => {
    const data = [
        {
            img: "course-1.png",
            title: "Fundamentals of Programming",
            price: "₹",
            language: 'Core Java or C Programming',
            weeks: '4 weeks',
            complexity: 'Beginner'
        },
        {
            img: "course-2.png",
            title: "Front-end web development",
            price: "₹₹",
            language: 'HTML/CSS, Javascript, APIs & ReactJs',
            weeks: '12 weeks',
            complexity: 'Intermediate'
        },
        {
            img: "course-3.png",
            title: "Full-stack web development",
            price: "₹₹₹",
            language: 'Java / PHP / Python & MySQL, HTML/CSS, Javascript',
            weeks: '16 weeks',
            complexity: 'Advanced'
        }
    ];
    return (
        <>
            <section className="courses-section-two">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-e wow zoomIn" />
                        <span className="icon icon-group-1 bounce-y" />
                        <span className="icon icon-group-2 bounce-y" />
                    </div>
                    <div className="sec-title text-center">
                        <span className="sub-title">popular courses</span>
                        <h2>Pick a course to<br /> get started your study</h2>
                    </div>
                    <div className="row">
                        {/* Course Block Two*/}
                        {data.map((item, i) => (
                            <div className="course-block-two col-lg-4 col-md-6 col-sm-12" key={i}>
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href="/page-course-details">
                                                <img src={`/images/resource/${item.img}`} title="Altalya" alt="Altalya" />
                                            </Link>
                                        </figure>
                                        <span className="price">{item.price}</span>
                                        <div className="value">{item.complexity}</div>
                                    </div>
                                    <div className="content-box">
                                        <ul className="course-info">
                                            <li><i className="fa fa-book" /> {item.language}</li>
                                        </ul>
                                        <h5 className="title"><Link href="/page-course-details">{item.title}</Link></h5>
                                        <div className="other-info">
                                            <div className="duration"><i className="fa fa-clock" />{item.weeks}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseTwo;