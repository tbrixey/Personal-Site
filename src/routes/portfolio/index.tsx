import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Portfolio: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <h1>Portfolio</h1>
            <h4>Personal</h4>
            <h4>Freelance</h4>
        </div>
    );
};

export default Portfolio;
