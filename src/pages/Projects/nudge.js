import React from "react";

export default function nudge() {
  return (
    <div align="center" className="grid-wrapper">
      <div className="col-6">
        <section className="image-container">
          <img src="https://i.imgur.com/VUfO2Gt.png" />
        </section>
      </div>

      <div id="two" className="col-6">
        <h2>Nudge</h2>
        <header className="major"></header>
        <p>
          Mobile app made for friends to keep each other accountable.
          <br />
          <br />
          Users join a user group and sets a goal for everyone in the group to
          see. Each goal is assigned a time limit and location. Goals cannot be
          marked completed unless the device is at the promised location for the
          specified amount of time.
        </p>
        <br />
        <h4>the stack :</h4>
        <ul id="stack">
          <li>React Native</li>
          <li>Firebase Firestore</li>
          <li>Node</li>
        </ul>
        <header className="major"></header>
        <section id="deployment">
          <a href="https://github.com/alntng/Nudge" target="_blank" id="deploy">
            <button id="deployment">Github</button>
          </a>
        </section>
      </div>
    </div>
  );
}
