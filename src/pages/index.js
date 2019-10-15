import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import Projects from "./projects";
import About from "./about";
import Experience from "./experience";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";

class Homepage extends React.Component {
  render() {
    const siteTitle = "Alan Tang";

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <About />
        <Projects />
        <Experience />
      </Layout>
    );
  }
}

export default Homepage;
