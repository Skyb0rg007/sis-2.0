import React from 'react';
import { Helmet } from 'react-helmet';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'

import ProfForm from './components/searchpage/professorform';
import AMvPM from './components/searchpage/amvspm';
import DistDropdown from './components/searchpage/distdropdown';
import SubjForm from './components/searchpage/subjsearchbox';
import WhichCampus from './components/searchpage/whichcampus';
import DaysofWeek from './components/searchpage/daysofweekform';


const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>SIS 2.0</title>
        <meta charSet="utf-8" />
      </Helmet>
      <body>
        <ProfForm />
        <DaysofWeek />
        <AMvPM/>
        <DistDropdown />
        <SubjForm />
        <WhichCampus />
      </body>
    </div>
  );
}

export default App
