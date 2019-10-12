/* dayoff.js
 * Students can ask for a day(s) off on the calendar page
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const DayOff = (props) => {
    return (
        <Form>
        {['checkbox'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
            I want &nbsp;
            <Form.Check inline label="M" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Tu" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="W" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Th" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="F" type={type} id={`inline-${type}-1`} />
            off
            </div>
            )

        )}
        </Form>
    )
}

export default DayOff;