const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/about.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/index.js"))),
  "component---src-pages-interests-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/interests.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/projects.js"))),
  "component---src-pages-projects-carousel-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/Projects/carousel.js"))),
  "component---src-pages-projects-grace-monsters-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/Projects/graceMonsters.js"))),
  "component---src-pages-projects-new-news-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/Projects/newNews.js"))),
  "component---src-pages-projects-nudge-js": hot(preferDefault(require("/Users/Alan/Documents/portfolio-site/src/pages/Projects/nudge.js")))
}

