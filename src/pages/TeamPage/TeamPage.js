import React from 'react';
import Layout from '../../components/Layout/Layout';
import TeamCard from '../../components/TeamCard/TeamCard';
import Img1 from '../../assets/images/team/destiny_ajakaiye.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import Img2 from '../../assets/images/team/segun.png';
import Img3 from '../../assets/images/team/daniel.png';
import Img4 from '../../assets/images/team/ope.jpg';
import Img5 from '../../assets/images/team/emmanella.jpg';
import './TeamPage.css';

const TeamPage = () => {
    return(
        <Layout activeMenu="team">
            <section id="team-page">
                <div id="watermark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInX'>
                                    <h1>Our Team Members</h1>
                                </ScrollAnimation>
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
                                    twitter: 'https://twitter.com/destinyajax',
                                    linkedin: 'https://linkedin.com/in/destinyajax',
                                    github: 'https://github.com/destinyajax'
                                }}
                            />
                            <TeamCard 
                                image={Img2} 
                                name="Segun Olumide" 
                                position="Frontend Developer"
                                portfolio={{
                                    twitter: 'https://twitter.com',
                                    linkedin: 'https://linkedin.com/in/wonexo',
                                    github: 'https://github.com/wonexo'
                                }}
                            />
                            <TeamCard 
                                image={Img3} 
                                name="Daniel Ayoola" 
                                position="Frontend Developer"
                                portfolio={{
                                    twitter: 'https://twitter.com/iamayooladaniel',
                                    linkedin: 'https://linkedin.com/in/ayoola-olugbenga-daniel',
                                    github: 'https://gitHub.com/dalexz4'
                                }}
                            />
                            <TeamCard 
                                image={Img4} 
                                name="Adeniran Opeyemi" 
                                position="UI/UX Designer"
                                portfolio={{
                                    twitter: 'https://twitter.com/thauiguy?s=09',
                                    linkedin: 'https://www.linkedin.com/in/adeniran-opeyemi-adewale-276650ab/',
                                    github: 'https://github.com/horpey'
                                }}
                            />
                            <TeamCard 
                                image={Img5} 
                                name="Abubakar Emmanuella Faridat " 
                                position="Frontend Developer"
                                portfolio={{
                                    twitter: 'https://twitter.com/manuellabubakar',
                                    linkedin: 'linkedin.com/in/emmanuella-faridat-abubakar',
                                    github: 'https://github.com/emmanuellabubakar'
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
                            <ScrollAnimation animateIn='flipInX'>
                                <h6>Passionate about driving success of the program?</h6>
                            </ScrollAnimation>
                            <button type="button" className="btn btn-lg">Join the team</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TeamPage;