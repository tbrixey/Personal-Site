import { h } from "preact";
import * as style from "./style.css";

const Contact = () => {
  return (
    <div class={style.container}>
      <div
        style={{
          margin: "16px 8px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Hit me up if you want to chat about anything!
      </div>
      <div class={style.contactList}>
        <li>
          e-mail:{" "}
          <a href="mailto:contact@trevorbrixey.com">contact@trevorbrixey.com</a>
        </li>
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
