import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import InputField from '../../components/Form/InpuField/InputField';
import ScrollAnimation from 'react-animate-on-scroll';
import Img from '../../assets/images/avatar.png';
import './MemberRegistration.css';

const MemberRegistration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [role, setRole] = useState("");
    const [gender, setGender] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("We are currently working on this piece please check back. Thank you!");
    };

    return(
        <Layout activeMenu="members">
            <div id="members-registration">
                <div id="watermark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <ScrollAnimation animateIn='flipInX'>
                                    <h1>Become a Member</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <img src={Img} alt=".." />
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 file-upload">
                                            <div className="form-group">
                                                <input 
                                                    type="file"
                                                    value=""
                                                />
                                            </div>
                                            <p>JPG, GIF or PNG. Max size of 200kb</p>
                                        </div>
                                    </div><hr/>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <InputField 
                                                value={firstName}
                                                type="text"
                                                onchangeinput={(text)=>{setFirstName(text.value)}}
                                                label="First Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <InputField 
                                                value={lastName}
                                                type="text"
                                                onchangeinput={(text)=>{setLastName(text.value)}}
                                                label="Last Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <InputField 
                                                value={email}
                                                type="email"
                                                onchangeinput={(text)=>{setEmail(text.value)}}
                                                label="Email Address"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <InputField 
                                                value={telephone}
                                                type="text"
                                                onchangeinput={(text)=>{setTelephone(text.value)}}
                                                label="WhatsApp Number"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <InputField 
                                                value={gender}
                                                type="select"
                                                options={[
                                                    "Male",
                                                    "Female"
                                                ]}
                                                onchangeinput={(text)=>{setGender(text.value)}}
                                                label="Gender"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <InputField 
                                                value={role}
                                                type="select"
                                                options={[
                                                    "Software Developer",
                                                    "Frontend Developer",
                                                    "Backend Developer",
                                                    "UI/UX Designer",
                                                    "Graphics Designer",
                                                    "ML Expert",
                                                    "DevOps Engineer"
                                                ]}
                                                onchangeinput={(text)=>{setRole(text.value)}}
                                                label="Role"
                                            />
                                        </div>
                                    </div><hr/>
                                    <div className="form-group" style={{marginTop: '20px'}}>
                                        <button type="submit" className="btn btn-lg">Join Now</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MemberRegistration;