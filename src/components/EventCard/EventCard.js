import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FaCalendar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import './EventCard.css';

const EventCard = props => {
    const { image, title, date } = props;
    return (
        <Fragment>
            <div className="col-lg-4 col-sm-12 col-xs-12" style={{marginBottom: '20px'}}>
                <div id="event-card">
                    <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                        <p><img src={image} alt="..." /></p>
                    </ScrollAnimation>
                    <h4><Link className="link" to="/">{title}</Link></h4>
                    <p>
                        <FaCalendar style={{marginRight: '10px'}}/>{" "}
                        {date}
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

EventCard.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default EventCard;