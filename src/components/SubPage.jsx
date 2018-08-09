import React, { Component } from 'react';

import Clients from './SubPages/Clients';
import Services from './SubPages/Services';
import AboutUs from './SubPages/AboutUs';

class SubPage extends Component {

  state = {
    loaded: false,
    title: '',
    classNames: '',
    component: null
  };

  componentDidMount() {

    this.changePageData()

    setTimeout(
      function() {
        this.setState({ loaded: true });
      }.bind(this), 400
    );
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
  }

  changePageData() {
    let page = this.props.location.pathname;

    if (page === '/clients') {
      this.setState({
        title: 'Clients',
        classNames: 'clients',
        component: <Clients/>
      });
    }

    if (page === '/services') {
      this.setState({
        title: 'Services',
        classNames: 'services',
        component: <Services/>
      });
    }

    if (page === '/about-us') {
      this.setState({
        title: 'About Us',
        classNames: 'about-us',
        component: <AboutUs/>
      });
    }
  }

  render() {

    const { loaded, title, classNames, component } = this.state;

    return (
      <section className={`${classNames} sub-page ${loaded && 'loaded'}`}>
        <header className="page-header">
          <h1>{title}</h1>
          <span className="border"></span>
        </header>
        {component}
      </section>
    );
  }
}

export default SubPage;
