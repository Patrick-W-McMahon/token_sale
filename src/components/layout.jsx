import React from "react";
import { Container } from "react-bootstrap";
import Header from './header';
import Footer from './footer';

//import '../style/fontawesome-free-5.15.4-web/css/all.min.css';
import '../style/bootstrap.min.css';
//import '../style/style.scss';
//import * as layoutStyle from './layout.module.scss';
const layoutStyle = {};

const Layout = ({ children, loginFn, isLoggedIn, accounts }) => {
    return (
        <Container className={layoutStyle.container} fluid>
            <div className={layoutStyle.content}>
                <Header loginFn={loginFn} loggedIn={isLoggedIn} accounts={accounts} />
                <Container>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {
                            key: index,
                            loginFn,
                            isLoggedIn,
                            accounts,
                        });
                    })}
                </Container>
            </div>
            <Footer />
        </Container>
    );
}

export default Layout;