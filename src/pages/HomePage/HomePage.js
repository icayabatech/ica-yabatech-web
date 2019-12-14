import React, { Fragment } from 'react';
import Layout from '../../components/Layout/Layout';
import './HomePage.css';

const HomePage = () => {
    return (
        <Fragment>
            <Layout>
                <section className="lead-board">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <span className="hoz-line"></span>
                            <span className="welcome-text">Welcome to ICA</span>
                            <h1 className="top-h1" style={{marginBottom: '0px'}}>Community</h1>
                            <h1 className="top-h1-2" style={{marginTop: '0px'}}>For Creators</h1>
                            <button type="button" className="top-btn btn btn-lg">Become a member</button>
                        </div>
                    </div>
                </section>
            </Layout>
        </Fragment>
    );
};

export default HomePage;