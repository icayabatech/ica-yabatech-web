import React, { Fragment } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import './PhotoCard.css';

export const DestinyCard = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12" style={{padding: 0}} >
                <div className="photo-card cssanimation destiny fadeIn col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{padding: 0}}>
                    <div className="cover">
                        <div className="content">
                            <ScrollAnimation animateIn='flipInX'>
                                <h4>Destiny Ajakaiye</h4>
                                <p style={{fontSize: 12}}>Software Developer</p>
                                <p>
                                    <a href="https://twitter.com/destinyajax" rel="noopener noreferrer" className="social-link" target="_blank"><FaTwitter /></a>
                                    <a href="https://github.com/destinyajax" rel="noopener noreferrer" className="social-link" target="_blank"><FaGithub /></a>
                                    <a href="https://linkedin.com/in/destinyajax" rel="noopener noreferrer" className="social-link" target="_blank"><FaLinkedin /></a>
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const SegunCard = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12" style={{padding: 0}} >
                <div className="photo-card cssanimation segun fadeIn col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{padding: 0}}>
                    <div className="cover">
                        <div className="content">
                            <ScrollAnimation animateIn='flipInX'>
                                <h4>Segun Olumide</h4>
                                <p style={{fontSize: 12}}>Frontend Developer</p>
                                <p>
                                    <a href="https://twitter.com/wonexo" className="social-link" rel="noopener noreferrer" target="_blank"><FaTwitter /></a>
                                    <a href="https://gitHub.com/wonexo" className="social-link" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                                    <a href="https://linkedin.com/in/wonexo" className="social-link" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const DanielCard = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12" style={{padding: 0}} >
                <div className="photo-card cssanimation daniel fadeIn col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{padding: 0}}>
                    <div className="cover">
                        <div className="content">
                            <ScrollAnimation animateIn='flipInX'>
                                <h4>Ayoola Daniel</h4>
                                <p style={{fontSize: 12}}>SEO Specialist</p>
                                <p>
                                    <a href="https://twitter.com/iamayooladaniel" className="social-link" rel="noopener noreferrer" target="_blank"><FaTwitter /></a>
                                    <a href="https://gitHub.com/dalexz4" className="social-link" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                                    <a href="https://linkedin.com/in/ayoola-olugbenga-daniel/" className="social-link" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const OpeCard = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12" style={{padding: 0}} >
                <div className="photo-card cssanimation ope fadeIn col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{padding: 0}}>
                    <div className="cover">
                        <div className="content">
                            <ScrollAnimation animateIn='flipInX'>
                                <h4>Adeniran Opeyemi</h4>
                                <p style={{fontSize: 12}}>UI/UX Developer</p>
                                <p>
                                    <a href="https://twitter.com/thauiguy?s=09" className="social-link" rel="noopener noreferrer" target="_blank"><FaTwitter /></a>
                                    <a href="https://github.com/horpey" className="social-link" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/adeniran-opeyemi-adewale-276650ab/" rel="noopener noreferrer" className="social-link" target="_blank"><FaLinkedin /></a>
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};