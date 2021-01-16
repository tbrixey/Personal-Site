import { h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Header = () => {
  return (
    <header class={style.header}>
      <h1></h1>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
        <Link activeClassName={style.active} href="/portfolio">
          Portfolio
        </Link>
        <a
          activeClassName={style.active}
          href="https://blog-trevorbrixey.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <Link activeClassName={style.active} href="/contact">
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
