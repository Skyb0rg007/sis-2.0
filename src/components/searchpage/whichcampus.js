/* whichcampus.js
 * Students can select which campus classes should be on.
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const WhichCampus = (props) => {
    return (
        <Form>
        {['checkbox'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="Medford" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="SMFA" type={type} id={`inline-${type}-2`} />

            </div>
        ))}
        </Form>
    )
}

export default WhichCampus;