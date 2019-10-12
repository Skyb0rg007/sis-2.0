import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import About from './pages/about';
import Index from './pages/index';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
