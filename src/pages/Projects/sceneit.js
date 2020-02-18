import React from "react";

export default function graceMonsters() {
  return (
    <div align="center" className="grid-wrapper">
      <div className="col-6">
        <section className="image-container">
          <img src="https://i.imgur.com/ccwZ48H.png" />
        </section>
      </div>

      <div id="two" className="col-6">
        <h2>Scene It</h2>
        <header className="major"></header>
        <p>
          Fullstack Javascript web application to keep track of movies you've
          seen, hitting the The Movie Database API. There is also a form for
          users to select and email their Oscar Predictions.
          <br />
          <br />
        </p>
        <br />
        <h4>the stack :</h4>
        <ul id="stack">
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostGres</li>
          <li>EmailJS</li>
        </ul>
        <header className="major"></header>
        <section id="deployment">
          <a
            href="https://github.com/alntng/sceneit"
            target="_blank"
            id="deploy"
          >
            <button id="deployment">Github</button>
          </a>
          <a
            href="https://iscene-it.herokuapp.com/"
            target="_blank"
            id="deploy"
          >
            <button id="deployment">Heroku</button>
          </a>
        </section>
      </div>
    </div>
  );
}
