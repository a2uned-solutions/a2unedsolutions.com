import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  Link,
} from 'react-router-dom';

import Clients from './Clients';
import Services from './Services';
import AboutUs from './AboutUs';

class SubPage extends Component {

  timer = null;

  state = {
    completed: 0,
    loaded: false,
    title: '',
    classNames: '',
    component: null
  };

  componentDidMount() {

    this.changePageData()

    this.timer = setInterval(this.progress, 40);

    setTimeout(
      function() {
        this.setState({ loaded: true });
      }.bind(this), 1100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.setState({ loaded: false });
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      return;
    } else {
      const diff = Math.random() * 20;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  }

  changePageData() {
    let page = this.props.location.pathname;

    if (page === '/clients') {
      this.setState({
        title: 'Clients',
        classNames: 'client ',
        component: <Clients/>
      });
    }

    if (page === '/services') {
      this.setState({
        title: 'Services',
        classNames: 'services ',
        component: <Services/>
      });
    }

    if (page === '/about-us') {
      this.setState({
        title: 'About Us',
        classNames: 'about-us ',
        component: <AboutUs/>
      });
    }
  }

  render() {

    const { completed, loaded, title, classNames, component } = this.state;

    return (
      <section className={`${classNames} sub-page ${loaded && 'loaded'}`}>
        <header className="page-header">
          <Link to="/" title="Home">
            <i className="fas fa-home"></i>
          </Link>
          <span className="delim"> / </span>
          <h1>{title}</h1>
          <LinearProgress className="page-progress" variant="determinate" value={completed} />
        </header>
        {component}
      </section>
    );
  }
}

export default SubPage;
