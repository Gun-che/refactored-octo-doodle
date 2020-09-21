import React from 'react';
import loadable from '@loadable/component';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';
import { LoadingConst } from './components/Loading';
import { Header } from './components/Header';

const Home = loadable(() => import('./containers/HomePageContainer'), {
  fallback: LoadingConst,
});

export function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

