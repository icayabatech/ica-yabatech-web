import React, { Fragment } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './MemberCard.css';

const MemberCard = props => {
    const { image, name, position, portfolio } = props;
    return (
        <Fragment>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" style={{marginBottom: '40px'}}>
                <div id="member-card">
                    <p><img className="img" src={image} alt="..." /></p>
                    <h4 className="h4">{name}</h4>
                    <p>{position}</p>
                    <span>
                        <a href={portfolio.twitter} className="social-link"><FaTwitter /></a>
                        <a href={portfolio.github} className="social-link"><FaGithub /></a>
                        <a href={portfolio.linkedin} className="social-link"><FaLinkedin /></a>
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

MemberCard.propTypes = {
    image: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    portfolio: PropTypes.object.isRequired
};

export default MemberCard;