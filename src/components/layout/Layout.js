import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNav from './SideNav';

const Layout = ({ children }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/">SIS 2.0</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <body>
                <Container>
                    <Row>
                        <Col md="2">
                            <SideNav className="fixed-top">
                                <SideNav.Item>
                                    Hello
                                </SideNav.Item>
                            </SideNav>
                        </Col>
                        <Col as="main" md="10">
                            {children}
                        </Col>
                    </Row>
                </Container>
            </body>
            <footer>
                <p>&copy; SISter Act 2019</p>
            </footer>
        </div>
    );
}

export default Layout