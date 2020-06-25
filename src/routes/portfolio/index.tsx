import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Portfolio: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <div class={style.section}>
                <h2 style={{ marginBottom: "0px" }}>Personal</h2>
                <div>
                    <h4>All Affiliate Links (new)</h4>
                    <p>Search for and submit affiliate codes!</p>
                    <p>
                        <a href={"https://allaffiliatelinks.com/"}>
                            https://allaffiliatelinks.com/
                        </a>
                    </p>
                    <ul>
                        <li>
                            <p>Preact</p>
                        </li>
                        <li>
                            <p>Express</p>
                        </li>
                        <li>
                            <p>Firebase / Heroku</p>
                        </li>
                    </ul>
                    <h4>Baby Companion (In Development)</h4>
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
                <h2 style={{ marginBottom: "0px" }}>Professional</h2>
                <div>
                    <h4>Raising A Village</h4>
                    <p>
                        Built for a non-profit organization that just needed
                        something simple that people could go to.
                    </p>
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
