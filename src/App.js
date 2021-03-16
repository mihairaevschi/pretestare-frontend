import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeIndex from './components/home/index.jsx';
import About from './components/about/index.jsx';
import Latest from './components/latest/index.jsx';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomeIndex}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/start" component={Latest} />
        </Switch>
      </Router>
    )
  }
}
