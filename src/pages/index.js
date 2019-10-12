import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Calendar from '../components/calendar/Grid'
import { Container, Row, Col, Nav, Dropdown, NavDropdown } from 'react-bootstrap';
import catalog from '../data/catalog.json'

const CalFilters = () => {
    return (
        <p>Filters here</p>
    )
}

const CalSelector = ({ calendars }) => {
    const [calIdx, setCalIdx] = useState(0);

    return (
        <Container>
            <Row>
                {calendars.length < 10
                    ?
                    (
                        <Nav variant="tabs">
                            {calendars.map((calendar, idx) => (
                                <Nav.Item key={idx}>
                                    <Nav.Link onSelect={() => setCalIdx(idx)} eventKey={idx}>
                                        <p>Calendar #{idx}</p>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    )
                    :
                    (
                        <Nav variant="tabs">
                            <NavDropdown title="Select a calendar">
                                {calendars.map((calendar, idx) => (
                                    <NavDropdown.Item onSelect={() => setCalIdx(idx)} key={idx} eventKey={idx}>
                                        <p>Calendar #{idx}</p>
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    )
                }
            </Row>
            <Row>
                <p>Current: Calendar #{calIdx}</p>
            </Row>
        </Container>
    )
}
CalSelector.propTypes = {
    calendars: PropTypes.array
}

const Index = () => {
    const calendars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <>
            <Helmet><title>SIS 2.0</title></Helmet>
            <Container>
                <Row>
                    <Col md="2">
                        <CalFilters />
                    </Col>
                    <Col md="10">
                        <CalSelector calendars={calendars} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;