import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <h1>My name is Trevor 🤙</h1>
            <h2>Full-Stack Developer and aspiring designer</h2>
            <p>
                I currently work for a small agency while also picking up
                freelance jobs.
            </p>
        </div>
    );
};

export default Home;
