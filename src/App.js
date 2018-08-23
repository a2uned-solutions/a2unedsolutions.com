import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import history from './utils/history';
import ReactGA from 'react-ga';

import './css/app.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SubPage from './components/SubPage';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactDrawer : false,
      mobileDrawer : false,
      contactFormCompleted: false
    };
  }

  componentDidMount() {
    ReactGA.initialize('UA-112084957-1');
  }

  fireTracking = () => {
    console.log(window.location)
    ReactGA.pageview(window.location.hash);
  }

  toggleContactFormCompleted = () => {
    this.setState({
      contactFormCompleted : !this.state.contactFormCompleted,
    });
  };

  toggleDrawer = (drawerName, open) => () => {
    this.setState({
      [drawerName]: open,
    });
  };

  render() {

    const { contactDrawer, mobileDrawer, contactFormCompleted } = this.state;

    return (
      <Router onChange={this.fireTracking} history={history}>
          <Route
            render={({ location }) => (
              <div>
                <Route
                  exact
                  path="/"
                />
                <ScrollToTop location={location}>
                  <div className={`app ${location.pathname === '/' && 'root'}`}>
                    <Header
                      toggleDrawer={this.toggleDrawer}
                      toggleContactFormCompleted={this.toggleContactFormCompleted}
                      contactDrawer={contactDrawer}
                      mobileDrawer={mobileDrawer}
                      contactFormCompleted={contactFormCompleted} />
                    <main>
                      <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={0}>
                          <Switch location={location}>
                            <Route
                              exact
                              path="/"
                              render={(props) => <Home {...props} toggleDrawer={this.toggleDrawer} />} />
                            <Route
                              exact
                              path="/clients"
                              render={(props) => <SubPage {...props} toggleDrawer={this.toggleDrawer} />} />
                            <Route
                              exact
                              path="/services"
                              render={(props) => <SubPage {...props} toggleDrawer={this.toggleDrawer} />}/>
                            <Route
                              exact
                              path="/about-us"
                              render={(props) => <SubPage {...props} toggleDrawer={this.toggleDrawer} />} />
                            <Route
                              render={() => <div style={{ margin: '90px 30px 50px', textAlign: 'center' }}><h1>404</h1><h2>Sorry this page doesn't exist.</h2></div>} />
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                    </main>
                    <Footer/>
                  </div>
                </ScrollToTop>
              </div>
            )}
          />
      </Router>
    );
  }
}

export default App;
