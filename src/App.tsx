import React from 'react';
import loadable from '@loadable/component';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';

import './App.scss';
import { LoadingConst } from './components/Loading';

const Home = loadable(() => import('./containers/HomePageContainer'), {
  fallback: LoadingConst,
});

export function App() {
  return (
    <div className="App">

      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
      </Switch>
    </div>
  );
}

