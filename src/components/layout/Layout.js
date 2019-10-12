import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <title>{title ? title : "SIS 2.0"}</title>
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
                {children}
            </body>
            <footer>
                <p>&copy; SISter Act 2019</p>
            </footer>
        </div>
    );
}

export default Layout