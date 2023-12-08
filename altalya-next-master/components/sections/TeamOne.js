import React from 'react';
import Link from 'next/link';

const TeamOne = () => {
    const data = [
        {
            img: "team-1.jpg",
            title: "Ramya Ganesh",
            desig: "CEO & Trainer",
            instagram: "https://www.instagram.com/ramyaganesh191/"
        },
        {
            img: "team-2.jpg",
            title: "Vel Eswaran",
            desig: "Trainer",
            instagram: "https://www.instagram.com/veleswaran3/"
        },
    ];
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">qualified teachers</span>
                        <h2>Meet the teacher who <br />teaches you online</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="team-block col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" key={i}>
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src={`images/resource/${item.img}`} title="Altalya" /></Link></figure>
                                        <span className="share-icon"><a rel="noreferrer" href={`${item.instagram}`} target="_blank"><i className="fab fa-instagram" /></a></span>
                                        <div className="social-links">
                                            
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><Link href="/page-team-details">{item.title}</Link></h4>
                                        <span className="designation">{item.desig}</span>
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

export default TeamOne;