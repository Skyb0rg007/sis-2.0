import React from 'react';
import PropTypes from 'prop-types'
import { Container, Col, Row, Nav, Form } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'

const SideNav = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

SideNav.Item = ({ children }) => {
    return (
        <p>
            {children}
        </p>
    )
}

export default SideNav;