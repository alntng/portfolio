import React from "react";

export default function nudge() {
  return (
    <div align="center" className="grid-wrapper">
      <div className="col-6">
        <h1>Screen shot goes here</h1>
      </div>

      <div id="two" className="col-6">
        <h2>Nudge</h2>
        <header className="major"></header>
        <p>Mobile app made for friends to keep each other accountable.</p>
        <br />
        <h4>the stack :</h4>
        <ul id="stack">
          <li>React Native</li>
          <li>Firebase Firestore</li>
          <li>Node</li>
        </ul>
        <header className="major"></header>
        <section id="deployment">
          <a
            href="https://github.com/1906-cs-ness-ninjas/new-news"
            target="_blank"
            id="deploy"
          >
            <button id="deployment">Github</button>
          </a>
          <a
            href="https://newnews-1906.herokuapp.com"
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
