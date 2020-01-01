import React from 'react';
import Layout from '../../components/Layout/Layout';
import './TeamPage.css';

const TeamPage = () => {
    return(
        <Layout>
            <section className="team-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <h1>Our Team</h1>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TeamPage;