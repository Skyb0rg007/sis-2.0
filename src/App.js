import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/about';
import Index from './pages/index';
import Search from './pages/search';
import Layout from './components/layout/Layout';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Index />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  </Layout>
);

export default App;
