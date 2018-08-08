import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  Link,
} from 'react-router-dom';

class Clients extends Component {

  timer = null;

  state = {
    completed: 0,
    loaded: false
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 40);
    setTimeout(
      function() {
        this.setState({ loaded: true });
      }.bind(this), 1100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      return;
    } else {
      const diff = Math.random() * 20;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {

    const { completed, loaded } = this.state;

    return (
      <section className={`clients sub-page ${loaded && 'loaded'}`}>
        <header className="page-header">
          <Link to="/" title="Home">
            <i className="fas fa-home"></i>
          </Link>
          <span className="delim"> / </span>
          <h1>Clients</h1>
          <LinearProgress className="page-progress" variant="determinate" value={completed} />
        </header>
        <div className="page-content">
          <p className="content-intro">We aren't even a year old yet and we already have some amazing clients.</p>
          <ul className="grid-list">
            <li>Lakewares</li>
            <li>Disrupting Nate</li>
            <li>Metzger's</li>
            <li>Fraza</li>
            <li>Artline</li>
            <li>HL7</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Clients;
