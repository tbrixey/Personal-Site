import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import { Link } from "preact-router";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <h1>My name is Trevor 🤙</h1>
            <h2>Full-Stack Developer and aspiring designer ✨</h2>
            <div class={style.section}>
                I currently work at a small agency called{" "}
                <a href={"https://crema.us"}>Crema</a> while also picking up
                freelance jobs.
            </div>
            <div class={style.section}>
                Check out my portfolio{" "}
                <Link
                    href="/portfolio"
                    style={{ color: "#147efb", textDecoration: "none" }}
                >
                    here
                </Link>
            </div>
        </div>
    );
};

export default Home;
