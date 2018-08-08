import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './css/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactFrom from './components/ContactForm';

import Home from './components/Home';
import Clients from './components/Clients';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

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

  render() {

    return (
      <Router>
        <ScrollToTop>
          <Route
            render={({ location }) => (
              <div>
                <Route
                  exact
                  path="/"
                />
                  <div className="app">
                    {/*<ContactFrom />*/}
                    <Header />
                    <main>
                      <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={300}>
                          <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/clients" component={Clients} />
                            <Route exact path="/services" component={Services} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route render={() => <div>Not Found</div>} />
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                    </main>
                    <Footer/>
                  </div>
              </div>
            )}
          />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
