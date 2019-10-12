/* daysofweekform.js
 * Students can include or exclude certain days of the week
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const DaysofWeek = (props) => {
    return (
        <Form>
        {['checkbox'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="M" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Tu" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="W" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Th" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="F" type={type} id={`inline-${type}-1`} />

            <Form.Check inline label="Include" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Exclude" type={type} id={`inline-${type}-2`} />
            </div>
            )

        )}
        </Form>
    )
}

export default DaysofWeek;