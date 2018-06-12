import React, { Component } from 'react';
import './Styles/App.css';
import './Styles/Bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import Projects from './Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/now" component={Page} id="now" />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
