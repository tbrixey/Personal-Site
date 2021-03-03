import { h } from "preact";
import { Link } from "preact-router";
import * as style from "./style.css";

const Portfolio = () => {
  return (
    <div class={style.container}>
      <div class={style.section}>
        <h1 style={{ marginBottom: "0px" }}>Personal</h1>
        <div>
          <h2>All Affiliate Links</h2>
          <div>Search for and submit affiliate codes!</div>
          <p>
            (Figuring out where to host this.) github links{" "}
            <a
              href="https://github.com/tbrixey/all-aff-links"
              target="_blank"
              rel="noreferrer"
            >
              ui
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/tbrixey/all-aff-links-api"
              target="_blank"
              rel="noreferrer"
            >
              api
            </a>
            .
          </p>
          <ul class={style.techList}>
            <li>
              <p>React.js</p>
            </li>
            <li>
              <p>Express</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
            <li>
              <p>Hosting was: Firebase / Heroku</p>
            </li>
          </ul>
          <h2>Video Tagger Rx</h2>
          <div>
            Tag moments in videos. Export screenshots. Make better movies.
          </div>
          <p>
            Check it out{" "}
            <a
              href="https://video-tagger-rx.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
          <ul class={style.techList}>
            <li>
              <p>React.js</p>
            </li>
            <li>
              <p>Electron.js</p>
            </li>
          </ul>
        </div>
      </div>
      <div class={style.section}>
        <h1 style={{ marginBottom: "0px" }}>Professional</h1>
        <div>
          <h3>You could be here!</h3>
          <div>
            Got an idea and want a quick prototype? Want a static webpage for
            your new or existing business? Send me a{" "}
            <Link href="/contact">message</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
