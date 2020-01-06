import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import EventCard from '../../components/EventCard/EventCard';
import Img2 from '../../assets/images/events/ui-ux-design.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import './EventsPage.css';
import { FaCalendar, FaClock } from 'react-icons/fa';

const EventsPage = () => {
    const [events] = useState([
        {
            title: "Demistifying Software Development Challenges",
            date: "18th August, 2019",
            image_url: "https://miro.medium.com/max/1024/1*XmAsGadWld5SHUJeoOVSSw.jpeg"
        },
        {
            title: "Getting Started With Android ",
            date: "11th July, 2019",
            image_url: "https://miro.medium.com/max/2592/1*g6iBJ4W-NM4IUk56mkzbNw.jpeg"
        },
        {
            title: "TensorFlow For Absolute Beginners",
            date: "18th June, 2019",
            image_url: "https://miro.medium.com/max/1280/1*izZkGZn8CCdCtbEY3qtXWg.jpeg"
        }
    ]);

    return(
        <Layout>
            <div id="events-page">
                <div id="next-event">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInX'>
                                    <h1>Next Event</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                                    <img src={Img2} alt="..." />
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <h2>Getting Started With UI/UX Design</h2>
                                <ScrollAnimation animateIn='flipInX'>
                                    <p>The Ingressive Campus Ambassadors Yabatech Chapter will be having an introductory section on UI/UX design
                                     with Oluwadamilola Soyombo who is a UI/UX design expert and mentor.</p>
                                </ScrollAnimation>
                                <span>
                                    <FaCalendar className="icon" /> {" "} 11th January, 2019 {" "} 
                                    <FaClock className="icon" /> {" "} 8:00pm - 9:00pm
                                </span>
                                <button className="btn btn-lg" type="button">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInX'>
                                    <h1>Past Event</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="row">
                            {events.map((event,index) => (
                                <EventCard 
                                    image={event.image_url} 
                                    title={event.title}
                                    date={event.date}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EventsPage;