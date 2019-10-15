import React from "react";
import headerStyles from "../assets/scss/header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-coffee"></span>
          <h1>
            Hi, I'm <strong>Alan</strong>,
            <br /> a Software Engineer from
            <br />
            Queens, New York.
          </h1>

          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                About Me
              </a>
            </li>
            <li>
              <a href="#two" className="button scrolly">
                Projects
              </a>
            </li>
            <li>
              <a href="#three" className="button scrolly">
                Experience
              </a>
            </li>
            <li>
              <a
                href="mailto:atang8013@gmail.com?subject=Hey Alan!"
                target="_blank"
                className="button scrolly"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
