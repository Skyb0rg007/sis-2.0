import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonLabel = (props) => {
    return (
        <Button variant="primary">
            { props.name } was clicked 0 times
        </Button>
    )
}

export default ButtonLabel;