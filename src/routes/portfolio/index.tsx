import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Portfolio: FunctionalComponent = () => {
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
                            <p>Preact</p>
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
                    <h4>Raising A Village</h4>
                    <div>
                        Built for a non-profit organization that just needed
                        something simple that people could go to.
                    </div>
                    <p>
                        <a href={"https://raiseavillage.org/"}>
                            https://raiseavillage.org/
                        </a>
                    </p>
                    <ul class={style.techList}>
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
