import React, { useState } from 'react';
import Slider from "react-slick";
import Layout from '../../components/Layout/Layout';
import Icon1 from '../../assets/images/webdev.svg';
import Icon2 from '../../assets/images/androiddev.svg';
import Icon3 from '../../assets/images/cloud.svg';
import Icon4 from '../../assets/images/machine.svg';
import { DestinyCard, SegunCard, DanielCard, OpeCard } from '../../components/PhotoCard/Cards';
import Pic1 from '../../assets/images/pic-1.png';
import Pic2 from '../../assets/images/pic-2.png';
import Pic3 from '../../assets/images/pic-3.png';
import Pic4 from '../../assets/images/pic-4.png';
import ScrollAnimation from 'react-animate-on-scroll';

import './HomePage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {

    const [settings] = useState({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    });

    return (
        <Layout activeMenu="home">
            <section className="lead-board">
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <span className="hoz-line"></span>
                        <span className="welcome-text">Welcome to ICA - YABATECH</span>
                        <h1 className="top-h1" style={{marginBottom: '0px'}}>Community</h1>
                        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                            <h1 className="top-h1-2" style={{marginTop: '0px'}}>For Creators</h1>
                        </ScrollAnimation>
                        <button type="button" className="top-btn btn btn-lg">Become a member</button>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div id="watermark-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                                    <span>Ingressive</span>
                                    <h1>Campus Ambassadors </h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{marginBottom: '60px'}}>
                            <p>The Ingressive Campus Ambassador (ICA) program offers a unique opportunity for students in 
                            tertiary institutions in Africa to contribute to the growth and development of the African tech ecosystem. </p>
                            <p>ICA is a platform for growth and development of future CTOs, founders and CEOs, to learn from industry subject matter experts, share knowledge, network, build the community 
                            and gain from the many great opportunities attached to the program.</p>
                            <p>Our Campus Ambassadors are passionate about building an active community of tech enthusiasts - 
                            including designers and developers - and are committed to creating a positive experience for members of their community. </p>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <ScrollAnimation animateIn='flipInX'>
                                <h3>Vision</h3>
                                <span className="hoz-line"></span>
                                <p>Our Campus Ambassadors are passionate about building an active community of tech enthusiasts - 
                                including designers and developers - and are committed to creating a positive experience for members of their community.</p>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <ScrollAnimation animateIn='flipInX'>
                                <h3>Mission</h3>
                                <span className="hoz-line"></span>
                                <p>Our Campus Ambassadors are passionate about building an active community of tech enthusiasts - 
                                including designers and developers - and are committed to creating a positive experience for members of their community.</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tech-section">
                <div id="watermark-2">
                    <div className="container">
                        <div className="row" style={{marginBottom: '40px'}}>
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                                    <h1>Technologies We're Excited About </h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <img src={Icon1} alt=""/>
                            <p className="text-center">Web <br/>Development</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <img src={Icon2} alt=""/>
                            <p className="text-center">Android <br/>Development</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <img src={Icon3} alt=""/>
                            <p className="text-center">Cloud <br/>Computing</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <img src={Icon4} alt="" />
                            <p className="text-center">Machine <br/>Learning</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div id="watermark-3">
                    <div className="container">
                        <div className="row" style={{marginBottom: '40px'}}>
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                                    <h1>Our Team</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <DestinyCard />
                        <SegunCard />
                        <DanielCard />
                        <OpeCard />
                    </div>
                </div>
            </section>
            <section className="join-section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
                                <h6>Passionate about driving success of the program?</h6>
                            </ScrollAnimation>
                            <button type="button" className="btn btn-lg">Join the team</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="join-section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <h2>Who can become a member?</h2>
                            <p>The club is open to any student, ranging from novice develoeprs who are just starting to advance developers who want to further their skills. ICA is open for student to learn
                            development skills, solve problem through technology and inspire them to become world class Developers.</p>
                            <br/><button type="button" className="button btn btn-lg">Join the community</button>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div className="slider">
                                    <Slider {...settings}>
                                        <div><img src={Pic3} alt="..." /></div>
                                        <div><img src={Pic1} alt="..." /></div>
                                        <div><img src={Pic2} alt="..." /></div>
                                        <div><img src={Pic4} alt="..." /></div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;