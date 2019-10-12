import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import MainView from './components/mainview/MainView'
import About from './pages/about'
import Index from './pages/index'
import Layout from './components/Layout';


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
