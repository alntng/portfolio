import React from "react";

export default function graceMonsters() {
  return (
    <div align="center" className="grid-wrapper">
      <div className="col-6">
        <section className="image-container">
          <img src="https://i.imgur.com/XbJ3PtI.png" />
        </section>
      </div>

      <div id="two" className="col-6">
        <h2>Grace Monsters</h2>
        <header className="major"></header>
        <p>
          A fullstack, Javascript e-commerce site to help you catch them all.
          Users can successfully check out, if there is enough inventory in the
          PostGres database.
          <br />
          <br />
        </p>
        <br />
        <h4>the stack :</h4>
        <ul id="stack">
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostGres</li>
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
