import React, { Fragment } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './PhotoCard.css';

export const DestinyCard = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12" style={{padding: 0}} >
                <div className="photo-card cssanimation destiny fadeIn col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{padding: 0}}>
                    <div className="cover">
                        <div className="content">
                            <h4>Destiny Ajakaiye</h4>
                            <p style={{fontSize: 12}}>Software Developer</p>
                            <p>
                                <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
                                <a href="https://github.com" className="social-link"><FaGithub /></a>
                                <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
                            </p>
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
                            <h4>Segun Olumide</h4>
                            <p style={{fontSize: 12}}>Frontend Developer</p>
                            <p>
                                <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
                                <a href="https://github.com" className="social-link"><FaGithub /></a>
                                <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
                            </p>
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
                            <h4>Ayoola Daniel</h4>
                            <p style={{fontSize: 12}}>SEO Specialist</p>
                            <p>
                                <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
                                <a href="https://github.com" className="social-link"><FaGithub /></a>
                                <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
                            </p>
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
                            <h4>Adeniran Opeyemi</h4>
                            <p style={{fontSize: 12}}>UI/UX Developer</p>
                            <p>
                                <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
                                <a href="https://github.com" className="social-link"><FaGithub /></a>
                                <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};