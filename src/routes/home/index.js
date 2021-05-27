import { h } from "preact";
import * as style from "./style.css";
import { Link } from "preact-router";

const Home = () => {
  return (
    <div class={style.outerContainer}>
      <div class={style.container}>
        <h1>Hey, my name is Trevor Brixey.</h1>
        <h2>I'm a Full-Stack React Developer.</h2>
        <div>Among many other experiments and ventures.</div>
        <div class={style.section}>
          <div>
            You can find my general portfolio{" "}
            <Link href="/portfolio">here.</Link>
          </div>
        </div>

        <div class={style.nextSection}>
          <h3>What I'm working on next</h3>
          <li>
            <a href="https://vybinnetwork.com" target="_blank" rel="noreferrer">
              Vybin Network
            </a>
          </li>
          <li>
            Building an electon.js app.{" "}
            <a
              href="https://video-tagger-rx.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Video Tagger Rx
            </a>
          </li>
          <li>Quick, cheap, and functional single page business websites</li>
          <li>Streaming on Twitch</li>
        </div>

        <div class={style.footer}>
          <p>Last Update: May 27th, 2021</p>
          <p>Thanks for stopping by 🤙</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
