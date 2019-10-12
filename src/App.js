import React from 'react';
import { Helmet } from 'react-helmet';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'

import ButtonLabel from './components/ButtonLabel'

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>SIS 2.0</title>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        />
      </Helmet>
      <body>
        <ButtonLabel name="Johnny" />
      </body>
    </div>
  );
}

export default App
