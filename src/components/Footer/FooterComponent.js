import React from 'react';
import Logo from '../../assets/images/logo-black.svg';
import { Link } from "react-router-dom";
import { FaTwitter, FaWhatsapp, FaGithub, FaSlack } from 'react-icons/fa';
import './FooterComponent.css';

const FooterComponent = () => {
    return (
        <div className="bottom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12 col-sm-12">
                        <div>
                            <Link to="/" className="navbar-brand">
                                <img src={Logo} alt="ica-yabatech-logo" width="180"/>
                            </Link>
                            <span>Copyright &copy;{new Date().getFullYear()}. All Rights Reserved.</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12 col-sm-12">
                        <p>
                            <a href="https://twitter.com/IYabatech" className="social-link"><FaTwitter className="icon"/></a>
                            <a href="https://github.com" className="social-link"><FaGithub /></a>
                            <a href="https://linkedin.com" className="social-link"><FaSlack /></a>
                            <a href="https://linkedin.com" className="social-link"><FaWhatsapp /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;