/* professorform
 * Students can whitelist or blacklist a professor
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const ProfForm = (props) => {
    return (
        <Form>
        {['checkbox'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Control inline placeholder = "Type a Professor" style={{width: 500}}/>
            <Form.Check inline label="Include" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Exclude" type={type} id={`inline-${type}-2`} />

            </div>
        ))}
        </Form>
    )
}

export default ProfForm;