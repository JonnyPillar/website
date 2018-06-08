import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import Projects from './Projects';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/now" component={Page} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
