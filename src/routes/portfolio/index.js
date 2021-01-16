import { h } from "preact";
import { Link } from "preact-router";
import * as style from "./style.css";

const Portfolio = () => {
  return (
    <div class={style.container}>
      <div class={style.section}>
        <h2 style={{ marginBottom: "0px" }}>Personal</h2>
        <div>
          <h4>All Affiliate Links</h4>
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
              <p>React</p>
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
        </div>
      </div>
      <div class={style.section}>
        <h2 style={{ marginBottom: "0px" }}>Professional</h2>
        <div>
          <h4>You could be here!</h4>
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
