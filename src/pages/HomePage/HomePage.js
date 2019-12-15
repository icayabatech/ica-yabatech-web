import React, { Fragment } from 'react';
import Layout from '../../components/Layout/Layout';
import Icon1 from '../../assets/images/webdev.svg';
import Icon2 from '../../assets/images/androiddev.svg';
import Icon3 from '../../assets/images/cloud.svg';
import Icon4 from '../../assets/images/machine.svg';
import PhotoCard from '../../components/PhotoCard/PhotoCard.js';
import './HomePage.css';

const HomePage = () => {
    return (
        <Fragment>
            <Layout>
                <section className="lead-board">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <span className="hoz-line"></span>
                            <span className="welcome-text">Welcome to ICA - YABATECH</span>
                            <h1 className="top-h1" style={{marginBottom: '0px'}}>Community</h1>
                            <h1 className="top-h1-2" style={{marginTop: '0px'}}>For Creators</h1>
                            <button type="button" className="top-btn btn btn-lg">Become a member</button>
                        </div>
                    </div>
                </section>
                <section className="about-section">
                    <div id="watermark">campus ambassadors</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{marginBottom: '60px'}}>
                                <span>Ingressive</span>
                                <h1>Campus Ambassadors </h1>
                                <p>The Ingressive Campus Ambassador (ICA) program offers a unique opportunity for students in 
                                tertiary institutions in Africa to contribute to the growth and development of the African tech ecosystem. </p>
                                <p>ICA is a platform for growth and development of future CTOs, founders and CEOs, to learn from industry subject matter experts, share knowledge, network, build the community 
                                and gain from the many great opportunities attached to the program.</p>
                                <p>Our Campus Ambassadors are passionate about building an active community of tech enthusiasts - 
                                including designers and developers - and are committed to creating a positive experience for members of their community. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <h3>Vision</h3>
                                <span className="hoz-line"></span>
                                <p>Our Campus Ambassadors are passionate about building an active community of tech enthusiasts - 
                                including designers and developers - and are committed to creating a positive experience for members of their community.</p>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <h3>Mission</h3>
                                <span className="hoz-line"></span>
                                <p>Our Campus Ambassadors are passionate about building an active community of tech enthusiasts - 
                                including designers and developers - and are committed to creating a positive experience for members of their community.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tech-section">
                    <div id="watermark-1" style={{marginBottom: '0'}}>technologies</div>
                    <div className="container text-center">
                        <div className="row" style={{marginBottom: '40px'}}>
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h1>Technologies We're Excited About </h1>
                            </div>
                        </div>
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
                    <div id="watermark-1" style={{marginBottom: '0'}}>ingressive yaba</div>
                    <div className="container">
                        <div className="row" style={{marginBottom: '40px'}}>
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h1>Team</h1>
                            </div>
                        </div>
                        <div className="row">
                            <PhotoCard />
                            <PhotoCard />
                            <PhotoCard />
                            <PhotoCard />
                        </div>
                    </div>
                </section>
            </Layout>
        </Fragment>
    );
};

export default HomePage;