import React, { Component } from "react";
import SubPage from '../layout/subpage';
import Layout from '../layout';
import Clients from '../components/SubPages/clients';

import config from "../../data/SiteConfig";

class ServicesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: 'clients',
      title: 'Clients',
      seoTitle: config.seo.clients.title,
      seoDescription: config.seo.clients.description,
      canonical: `${config.siteUrl}/clients/`,
      component: <Clients/>
    };
  }

  render() {

    const { location } = this.props;

    return (
      <Layout location={location}>
        <SubPage pageData={this.state} location={location} />
      </Layout>
    );
  }
}

export default ServicesPage;
