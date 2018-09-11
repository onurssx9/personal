import React, { Component } from "react";
import Styles from "./welcome.scss";
import Editor from "./editor.jsx";
import Data from "../data/onur.json";

export default class Welcome extends Component {
  state = {
    information: Data
  };

  render() {
    const { information } = this.state;
    return (
      <div id={Styles.welcome}>
        <div className={Styles.column}>
          <h1>{`${information.name} ${information.surname}`}</h1>
          <h2>{information.title}</h2>
          <Editor information={information} />
        </div>
        <div className={[Styles.column, Styles.photo].join(" ")}>
          <a
            href="https://www.youtube.com/watch?v=WYwc31I6Dpk"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GlobalGameJam2017
          </a>
        </div>
      </div>
    );
  }
}
