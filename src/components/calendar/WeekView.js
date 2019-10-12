import React from 'react';
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'

const WeekView = ({ courses }) => {
    return (
        <Container>
            {courses.map(course => (
                <Col>

                </Col>
            ))}
        </Container>
    )
}

WeekView.propTypes = {
    courses: PropTypes.array
}

export default WeekView