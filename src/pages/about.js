import React from "react";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";

export default function about() {
  return (
    <section id="one" className="main style1">
      <div id="About" className="grid-wrapper">
        <div id="Summary" className="col-6">
          <header className="major">
            <h2>
              About Me
              <br />
            </h2>
          </header>
          <p>
            After graduation, I had worked operations roles at various banks and
            found that many responsibilities could have been automated with the
            proper software. If the simpler tasks could have been streamlined,
            resources could have been re-allocated to other departments of the
            bank. Outside of those roles, there are many daily tasks in the
            normal work environment that seem monotonous, however with
            technology, that can be made easier. The less cognitive space people
            occupy for minor tasks, the more attention they can give to what
            they truly need to do. My goal as a programmer is to make peoples’
            lives simpler.
          </p>
          <p>
            When I'm not debugging, you can most likely find me training for my
            next race, slowly working my way to completing an Iron Man (very
            slowly).
          </p>
          <h4 align="center">Front End</h4>
          <ul id="skills">
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Gatsby</li>
          </ul>
          <h4 align="center">Back End</h4>
          <ul id="skills">
            <li>NodeJS</li>
            <li>Express</li>
            <li>PostGreSQL</li>
            <li>Sequelize</li>
            <li>FireBase</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div align="center" className="col-6">
          <span className="image fit">
            <img id="portrait" src={pic01} alt="Portrait" />
          </span>
          <h5>
            <i>
              I'm also into a wide range of music. Here's a bit of what I've
              been jamming to recently. Feel free to{" "}
              <a
                href="mailto:atang8013@gmail.com?subject=Check out this song"
                target="_blank"
              >
                share some new tunes!
              </a>
            </i>
          </h5>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EpyxjexYAD9iN"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
