import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Grid from '../calendar/Grid'
import LeftView from './LeftView'

const MainView = (props) => {
    const onSelect = (key) => { if (key === 'about') props.about(); };
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/about">SIS 2.0</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav onSelect={onSelect}>
                            <Nav.Link eventKey="about">
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </header>
            <body>
                <LeftView />
                <Grid />
            </body>
        </>
    )
}

MainView.propTypes = {
    about: PropTypes.func
}

export default MainView;