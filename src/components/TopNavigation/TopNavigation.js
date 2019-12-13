import React, { Fragment, useState } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';
import { Link, NavLink as RRNavLink } from "react-router-dom";
import Logo from '../../assets/images/logo-white.png';
import './TopNavigation.css';

const TopNavigation = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Fragment>
            <nav className={` navContainer d-none d-md-block navbar navbar-expand-lg navbar-expand navbar-light `} style={{backgroundColor: '#000',padding: '20px'}}>
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="ica-yabatech-logo" width="200"/>
                    </Link>

                    <div className="" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link to="/" className={`top-nav-link`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" className={`top-nav-link`}>Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/members" className={`top-nav-link `}>Members</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/register" className="top-nav-btn">Next Event</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Navbar color="faded" className="d-block d-md-none shadow-lg" light>
                <NavbarBrand to="/" className="mr-auto">
                    <img src={Logo} alt="ica-yabatech-logo" width="200"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 mt-4 pull-right" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem><NavLink  to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink> </NavItem>
                        <NavItem><NavLink  to="/guest_organization_profile_all-hospital" activeClassName="active" tag={RRNavLink}>Find A Provider</NavLink> </NavItem>
                        <NavItem><NavLink  to="/guest_policy" activeClassName="active" tag={RRNavLink}>Our Policies</NavLink> </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    );
};

export default TopNavigation;