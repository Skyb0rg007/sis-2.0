import React from 'react';
import { Helmet } from 'react-helmet';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'

import ButtonLabel from './components/ButtonLabel'
import Grid from './components/Grid'

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>SIS 2.0</title>
        <meta charSet="utf-8" />
      </Helmet>
      <body>
        <Grid name="Johnny" />
      </body>
    </div>
  );
}

export default App
