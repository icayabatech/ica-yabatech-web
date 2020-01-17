import React, {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import MemberCard from '../../components/MemberCard/MemberCard';
import {getFunc} from '../../services';
import ScrollAnimation from 'react-animate-on-scroll';
import './MemberPage.css';

class MemberPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true});
        try {
            const {data: {data}} = await getFunc('/members');
            
            this.setState({
                members: data
            });
        } catch (err) {
            console.log(err);
        } finally {
            this.setState({loading: false});
        }
    }

    render() {

        const {members,loading} = this.state;

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
                                {loading && (
                                    <div className="col-md-12 text-center">
                                        <p style={{fontSize: '18px'}}><i className="fa fa-spinner fa-spin"></i>{" "} Loading...</p>
                                    </div>
                                )}
                                {!loading && members.length < 1 && (
                                    <div className="col-md-12 text-center">
                                        <p style={{fontSize: '18px'}}>There are no members</p>
                                    </div>
                                )}
                                {!loading && members.length > 0 && members.map(member => (
                                    <MemberCard 
                                        image={member.imageUrl} 
                                        name={`${member.firstName} ${member.lastName}`}
                                        position={member.role}
                                        portfolio={{
                                            twitter: member.twitterUrl,
                                            linkedin: member.linkedinUrl,
                                            github: member.githubUrl
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
    }
}

export default MemberPage;