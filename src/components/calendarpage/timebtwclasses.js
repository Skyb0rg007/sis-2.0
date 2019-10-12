/* timebtwclasses.js
 * Specify how much time between 2 classes
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react';
import { Form } from 'react-bootstrap';

const TimeBtwClasses = (props) => {
    return (
        <div>
        <Form inline>
        {['checkbox'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
            Leave between &nbsp;
            <Form.Control inline type = "minutes" style={{width: 50}}/>
            &nbsp; and &nbsp;
            <Form.Control inline type = "minutes" style={{width: 50}}/>
            &nbsp; minutes between classes

            </div>
        ))}
        </Form>
        </div>
    )
}

export default TimeBtwClasses;