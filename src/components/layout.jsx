import React from "react";
import { Container } from "react-bootstrap";
import Header from './header';
import Footer from './footer';

import '../style/bootstrap.min.css';
import '../style/fontawesome-free-5.15.4-web/css/all.min.css';
import '../style/style.css';

const Layout = ({ children, loginFn, isLoggedIn, accounts }) => {
    return (
        <Container className={'main_wrapper'} fluid>
            <div className={'content_wrapper'}>
                <Header loginFn={loginFn} loggedIn={isLoggedIn} accounts={accounts} />
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                        key: index,
                        loginFn,
                        isLoggedIn,
                        accounts,
                    });
                })}
            </div>
            <Footer />
        </Container>
    );
}

export default Layout;