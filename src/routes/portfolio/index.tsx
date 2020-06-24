import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Portfolio: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <div class={style.section}>
                <h2>Personal</h2>
                <div>
                    <h4>Baby Companion</h4>
                    <ul>
                        <li>
                            <p>React Native</p>
                        </li>
                        <li>
                            <p>Firebase</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class={style.section}>
                <h2>Professional</h2>
                <div>
                    <h4>Raising A Village</h4>
                    <p>
                        <a href={"https://raiseavillage.org/"}>
                            https://raiseavillage.org/
                        </a>
                    </p>
                    <ul>
                        <li>
                            <p>Wordpress</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
