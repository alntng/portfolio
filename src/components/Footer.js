import React from "react";
import resume from "../../src/assets/files/resume.pdf";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="mailto:atang8013@gmail.com?subject=Hey Alan!"
              target="_blank"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alntng"
              target="_blank"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/atang8013/"
              target="_blank"
              className="icon alt fa-linkedin"
            >
              <span className="label">linkedin</span>
            </a>
          </li>
          <li>
            <a
              href={resume}
              target="_blank"
              className="icon alt fa-file-text-o"
            >
              <span className="label">Resume</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Background images taken by Alan Tang</li>
        </ul>
      </section>
    );
  }
}

export default Footer;
