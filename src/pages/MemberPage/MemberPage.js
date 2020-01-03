import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import MemberCard from '../../components/MemberCard/MemberCard';
import Img1 from '../../assets/images/destiny_ajakaiye.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import './MemberPage.css';

const MemberPage = () => {
    const [members] = useState([1,2,3,4,5,6,7,8,9,0,11,12]);

    return(
        <Layout activeMenu="members">
            <div id="members-page">
                <div id="watermark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
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
                                    name="Destiny Ajakaiye" 
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
                                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                                    <h6>Passionate about moving your tech dream <br/> to the next level?</h6>
                                </ScrollAnimation>
                                <button type="button" className="btn btn-lg">Become a Member</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default MemberPage;