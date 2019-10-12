import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import About from './pages/about';
import Index from './pages/index';
import Layout from './components/layout/Layout';
import Grid from './components/calendar/Grid';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          <Layout title="about">
            <About />
          </Layout>
        </Route>
        <Route path="/">
          <Layout title="SIS 2.0">
            <Index />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
