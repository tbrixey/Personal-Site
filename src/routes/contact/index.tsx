import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import { Link } from "preact-router";

const Contact: FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <div style={{ margin: "16px 0", fontWeight: 700 }}>
                Hit me up if you want to chat about anything!
            </div>
            <div class={style.contactList}>
                <li>
                    e-mail:{" "}
                    <a href="mailto:contact@trevorbrixey.com">
                        contact@trevorbrixey.com
                    </a>
                </li>
                <li>Discord: Cast_Iron_Homie#0001</li>
                <li>Or just send me a DM on twitter</li>
            </div>
            <div style={{ textAlign: "center", marginTop: 24 }}>
                <a href="https://twitter.com/trevorbrixey">Twitter</a>{" "}
                <a href="https://www.twitch.tv/castironhomie">Twitch</a>{" "}
                <a href="https://www.linkedin.com/in/trevor-brixey-98ba599a/">
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Contact;