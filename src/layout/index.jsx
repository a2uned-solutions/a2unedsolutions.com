import React from "react";
import "font-awesome/scss/font-awesome.scss";
import "./index.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contactDrawer : false,
      mobileDrawer : false,
      contactFormCompleted: false
    };
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

    const { children } = this.props;
    const { mobileDrawer } = this.state;

    return (
      <div id="root">
          <div className="app">
            <Header mobileDrawer={mobileDrawer} />
            <main>
              {children}
            </main>
            <Footer />
          </div>
      </div>
    );
  }
}
