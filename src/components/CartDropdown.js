import React from 'react';
import {Dropdown} from 'react-bootstrap';

const CartDropdown = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Add to
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item >Cart 1</Dropdown.Item>
                <Dropdown.Item >Cart 2</Dropdown.Item>
                <Dropdown.Item >Cart 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CartDropdown;