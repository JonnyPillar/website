import React, { Component } from 'react';
import './Styles/App.css';
import './Styles/Bootstrap.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Now from './Pages/Now';
import Project from './Pages/Project';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';
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
              <Route exact path="/now" component={Now} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/projects/:id" component={Project} />
              <Route path="/404" component={NotFound} />
              <Redirect from='*' to='/404' />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
