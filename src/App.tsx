import React from 'react';
import loadable from '@loadable/component';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';
import HomePageContainer from './containers/HomePageContainer';

export function App() {
  return (
    <div className="App">
      <HomePageContainer />
    </div>
  );
}

