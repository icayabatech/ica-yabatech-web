import React, { Fragment } from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import FooterComponent from '../Footer/FooterComponent';

const Layout = ({children, activeMenu}) => {
    return (
        <Fragment>
            <TopNavigation activeMenu={activeMenu}></TopNavigation>
            <main>
                {children}
            </main>
            <FooterComponent></FooterComponent>
        </Fragment>
    );
};

export default Layout;