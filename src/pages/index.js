import React from 'react';
import { Helmet } from 'react-helmet'

import Calendar from '../components/calendar/Grid'

const Index = () => {
    return (
        <>
            <Helmet><title>SIS 2.0</title></Helmet>
            <Calendar />
        </>
    );
};

export default Index;