/* amvspm.js
 * Students can ask not to be shown classes that are too early or too late
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const AMvPM = (props) => {
    return (
        <Form>
        {['checkbox'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check label="I hate mornings" type={type} id={`inline-${type}-1`} />
            <Form.Check label="I hate evenings" type={type} id={`inline-${type}-2`} />

            </div>
        ))}
        </Form>
    )
}

export default AMvPM;