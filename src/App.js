import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import history from './utils/history';

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
      contactDrawerOpen : false
    };
  }

  toggleContactDrawer = (drawerName, open) => () => {
    this.setState({
      [drawerName]: open,
    });
  };

  render() {

    const { contactDrawerOpen } = this.state;

    return (
      <Router history={history}>
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
                      toggleContactDrawer={this.toggleContactDrawer}
                      contactDrawerOpen={contactDrawerOpen} />
                    <main>
                      <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={800}>
                          <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/clients" component={SubPage} />
                            <Route exact path="/services" component={SubPage} />
                            <Route exact path="/about-us" component={SubPage} />
                            <Route render={() => <div>Not Found</div>} />
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
