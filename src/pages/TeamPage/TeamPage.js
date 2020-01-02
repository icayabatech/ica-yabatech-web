import React from 'react';
import Layout from '../../components/Layout/Layout';
import TeamCard from '../../components/TeamCard/TeamCard';
import Img1 from '../../assets/images/destiny_ajakaiye.jpeg';
import Img2 from '../../assets/images/segun.png';
import Img3 from '../../assets/images/daniel.png';
import './TeamPage.css';

const TeamPage = () => {
    return(
        <Layout>
            <section className="team-page">
                <div id="watermark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <h1>Our Team Members</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <TeamCard 
                                image={Img1} 
                                name="Destiny Ajakaiye" 
                                position="Software Developer"
                                portfolio={{
                                    twitter: 'https://twitter.com',
                                    linkedin: 'https://linkedin.com',
                                    github: 'https://github.com'
                                }}
                            />
                            <TeamCard 
                                image={Img2} 
                                name="Segun Olumide" 
                                position="Frontend Developer"
                                portfolio={{
                                    twitter: 'https://twitter.com',
                                    linkedin: 'https://linkedin.com',
                                    github: 'https://github.com'
                                }}
                            />
                            <TeamCard 
                                image={Img3} 
                                name="Danile Ayoola" 
                                position="Frontend Developer"
                                portfolio={{
                                    twitter: 'https://twitter.com',
                                    linkedin: 'https://linkedin.com',
                                    github: 'https://github.com'
                                }}
                            />
                            <TeamCard 
                                image={Img1} 
                                name="Adeniran Opeyemi" 
                                position="UI/UX Designer"
                                portfolio={{
                                    twitter: 'https://twitter.com',
                                    linkedin: 'https://linkedin.com',
                                    github: 'https://github.com'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="join-section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <h6>Passionate about driving success of the program?</h6>
                            <button type="button" className="btn btn-lg">Join the team</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TeamPage;