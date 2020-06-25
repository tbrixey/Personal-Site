import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import { Link } from "preact-router";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <h1>My name is Trevor</h1>
            <h2>Full-Stack Developer and aspiring designer ✨</h2>
            <h4 class={style.section}>
                Check out my portfolio <Link href="/portfolio">here</Link>
            </h4>
            <div class={style.section}>
                I currently work at a small agency called{" "}
                <a href={"https://crema.us"}>Crema</a> while also picking up
                freelance jobs.
            </div>
            <div class={style.longSection}>
                I wanted to experiment with{" "}
                <a href={"https://preactjs.com/"}>Preact</a> and Typescript so I
                thought I might as well build my personal site using it.
                I&apos;ve never had some fancy site because let&apos;s be
                honest, you are here to check out my other work. Regardless,
                this site is forever a WIP so come back and check it out from
                time to time.
            </div>
            <div class={style.section}>Thanks for stopping by 🤙</div>
        </div>
    );
};

export default Home;
