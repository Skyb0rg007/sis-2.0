/* subjsearchbox.js
 * Students can type in a subject code to look for classes in a specific
 *      subject. The subject code is the first part of the class number.
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const SubjForm = (props) => {
    return (
        <Form>
         <Form.Group controlId="formBasicSubj">
            <Form.Label>Subject</Form.Label>
            <Form.Control/>
         </Form.Group>

        </Form>
    )
}

export default SubjForm;