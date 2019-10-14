import React from 'react'
import '../assets/files/resume.pdf'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="mailto:atang8013@gmail.com?subject=Hey Alan!"
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
              href="src/assets/files/resume.pdf"
              download
              className="icon alt fa-file-text-o"
            >
              <span className="label">Resume</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Alan Tang</li>
        </ul>
      </section>
    )
  }
}

export default Footer