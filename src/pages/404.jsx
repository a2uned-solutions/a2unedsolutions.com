import React, { Component } from "react";
import Layout from '../layout';

class NotFound extends Component {
  render() {

    const { location } = this.props;

    return (
      <Layout location={location}>
        <header className="page-header">
          <h1>404</h1>
          <span className="border"></span>
        </header>
        <div className="page-content" id="main-content">
          <div className="page-intro">
            <p>Page Not Found.</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFound;
