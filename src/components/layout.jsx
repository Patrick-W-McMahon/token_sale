import React from "react";
import { Container } from "react-bootstrap";
import Header from './header';
import Footer from './footer';

import '../style/bootstrap.min.css';
import '../style/fontawesome-free-5.15.4-web/css/all.min.css';
import '../style/style.css';

const Layout = ({ children, loginFn, isLoggedIn, accounts, title, author }) => (
    <Container className={'main_wrapper'} fluid>
        <div className={'content_wrapper'}>
            <Header title={title} loginFn={loginFn} isLoggedIn={isLoggedIn} accounts={accounts} />
            {children}
        </div>
        <Footer author={author} />
    </Container>
);


export default Layout;


/*

{() => {
                const additionalProps = { loginFn, isLoggedIn, accounts };
                if (React.isValidElement(children)) {
                    return React.Children.map(children, (child, i) => React.cloneElement(child, { key: i, ...additionalProps }));
                } else {
                    return typeof children === 'function' ? children(additionalProps) : children;
                }
            }}

*/