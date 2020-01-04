import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import MemberCard from '../../components/MemberCard/MemberCard';
import Img1 from '../../assets/images/avatar.png';
import ScrollAnimation from 'react-animate-on-scroll';
import './MemberPage.css';

const MemberPage = () => {
    const [members] = useState([1,2,3,4,5,6]);

    return(
        <Layout activeMenu="members">
            <div id="members-page">
                <div id="watermark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInX'>
                                    <h1>Our Members</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <div className="row">
                            {members.map(member => (
                                <MemberCard 
                                    image={Img1} 
                                    name="John Doe" 
                                    position="Software Developer"
                                    portfolio={{
                                        twitter: 'https://twitter.com',
                                        linkedin: 'https://linkedin.com',
                                        github: 'https://github.com'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <section className="join-section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInX'>
                                    <h6>Passionate about moving your tech dream <br/> to the next level?</h6>
                                </ScrollAnimation>
                                <Link to="/members-registration">
                                    <button type="button" className="btn btn-lg">Become a Member</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default MemberPage;