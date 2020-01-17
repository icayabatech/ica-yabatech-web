import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import Layout from '../../components/Layout/Layout';
import ScrollAnimation from 'react-animate-on-scroll';
import {uploadPostFunc} from '../../services';
import Img from '../../assets/images/avatar.png';
import './MemberRegistration.css';
import 'sweetalert/dist/sweetalert.css';

class MemberRegistration extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            role: '',
            image: null,
            previewImage: '',
            gender: '',
            twitterUrl: '',
            linkedInUrl: '',
            githubUrl: '',
            loading: false,
            show: false,
            type: 'success',
            message: '',
            title: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    };

    onFileUpload = e => {
        const reader = new FileReader();
        let file = e.target.files[0];
        this.setState({image: file});
        reader.addEventListener('load', () =>
            this.setState({ 
                previewImage: reader.result
            })
        );
        reader.readAsDataURL(file);
    };

    // validateSize=(event)=>{
    //     let file = event.target.files[0];
    //     let size = 30000;
    //     let err = '';
    //     console.log(file.size);
    //     if (file.size > size) {
    //      err = file.type+'is too large, please pick a smaller file\n';
    //      toast.error(err);
    //     }
    // }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({loading: true});
        try {  
            const payload = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                imageUrl: this.state.previewImage,
                role: this.state.role,
                gender: this.state.gender,
                githubUrl: this.state.githubUrl,
                linkedinUrl: this.state.linkedInUrl,
                twitterUrl: this.state.twitterUrl,
                telephone: this.state.telephone
            };
            const {data:{message}} = await uploadPostFunc('/member/create', payload);
            if(message) {
                this.setState({
                    show: true,
                    type: 'success',
                    message: message,
                    title: "Successful"
                });
                this.setState({firstName: "",lastName: "", email: "",role: "",gender: "",telephone: "",linkedInUrl: "",twitterUrl:"",githubUrl: ""});
            }
        } catch ({response:{data:{message,error}}}) {
            if(error) {
                this.setState({
                    show: true,
                    type: 'error',
                    message: message,
                    title: 'Error'
                });
            }
        } finally {
            this.setState({loading: false});
        }
    };

    render() {

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
                                    <SweetAlert
                                        show={this.state.show}
                                        title={this.state.title}
                                        type={this.state.type}
                                        text={this.state.message}
                                        onConfirm={() => this.setState({ show: false })}
                                    />
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                <p>
                                                    {this.state.previewImage === '' && (<img src={Img} alt=".." />)}
                                                    {this.state.previewImage !== '' && (<img src={this.state.previewImage} alt=".." style={{borderRadius: '100%'}}/>)}
                                                </p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 file-upload">
                                                <div className="form-group">
                                                    <input type="file" onChange={this.onFileUpload} required/>
                                                </div>
                                                <p>JPG, GIF or PNG. Max size of 200kb</p>
                                            </div>
                                        </div><hr/>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>First Name</label>
                                                    <input 
                                                        value={this.state.firstName}
                                                        type="text"
                                                        placeholder="Ex. John"
                                                        className="form-control"
                                                        name="firstName"
                                                        onChange={this.handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Last Name</label>
                                                    <input 
                                                        value={this.state.lastName}
                                                        type="text"
                                                        placeholder="Ex. Doe"
                                                        onChange={this.handleInputChange}
                                                        className="form-control"
                                                        name="lastName"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Email</label>
                                                    <input 
                                                        value={this.state.email}
                                                        placeholder="johndoe@gmail.com"
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        onChange={this.handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Whatsapp/Telegram Number</label>
                                                    <input 
                                                        value={this.state.telephone}
                                                        type="text"
                                                        name="telephone"
                                                        className="form-control"
                                                        onChange={this.handleInputChange}
                                                        placeholder="0800001111"
                                                        maxLength="11"
                                                        minLength="11"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Gender</label>
                                                    <select name="gender" value={this.state.gender} onChange={this.handleInputChange} required className="form-control">
                                                        <option value="">Select....</option>
                                                        <option value="Male">Male</option>
                                                        <option vale="Female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Role</label>
                                                    <select name="role" onChange={this.handleInputChange} value={this.state.role} required className="form-control">
                                                        <option value="">Select....</option>
                                                        <option value="Software Developer">Software Developer</option>
                                                        <option value="Frontend Developer">Frontend Developer</option>
                                                        <option value="Backend Developer">Backend Developer</option>
                                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                                        <option value="Graphics Designer">Graphics Designer</option>
                                                        <option value="ML Expert">ML Expert</option>
                                                        <option value="DevOps Engineer">DevOps Engineer</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Twitter</label>
                                                    <input 
                                                        value={this.state.twitterUrl}
                                                        type="url"
                                                        className="form-control"
                                                        placeholder="https://twitter.com/johndoe"
                                                        onChange={this.handleInputChange}
                                                        label="Twitter"
                                                        name="twitterUrl"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Github</label>
                                                    <input
                                                        placeholder="https://github.com/johndoe"
                                                        value={this.state.githubUrl}
                                                        type="url"
                                                        name="githubUrl"
                                                        className="form-control"
                                                        onChange={this.handleInputChange}
                                                        label="Github"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group input-form">
                                                    <label>Linkedin</label>
                                                    <input 
                                                        name="linkedInUrl"
                                                        value={this.state.linkedInUrl}
                                                        className="form-control"
                                                        placeholder="https://linkedin.com/in/johndoe"
                                                        type="url"
                                                        onChange={this.handleInputChange}
                                                        label="Linkedin"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div><hr/>
                                        <div className="form-group" style={{marginTop: '20px'}}>
                                            <button type="submit" className="btn btn-lg">
                                                {this.state.loading && (<span><i className="fa fa-spinner fa-spin"></i> Loading...</span>)}
                                                {!this.state.loading && "Join Now"}
                                            </button>
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
    }
};

export default MemberRegistration;