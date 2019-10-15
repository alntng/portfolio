import React from "react";

export default function newNews() {
  return (
    <div align="center" className="grid-wrapper">
      <div className="col-6">
        <section className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eyZqJ11_Rkk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </div>

      <div id="two" className="col-6">
        <h2>New News</h2>
        <header className="major"></header>
        <p>
          Web app and chrome extension news aggregator consolidating a user's
          favorite news articles based on topics and news sites of choice.
        </p>
        <br />
        <h4>the stack :</h4>
        <ul id="stack">
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostGres</li>
          <li>Puppeteer</li>
          <li>Cheerio</li>
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
