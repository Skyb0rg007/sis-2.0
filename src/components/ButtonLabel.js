import React from 'react';
import { Alert } from 'react-bootstrap';

const ButtonLabel = (props) => {
    return (
        <Alert variant="primary">
            { props.name } was clicked 0 times
        </Alert>
    )
}

export default ButtonLabel;