import React, { Component } from "react";
import Styles from "./welcome.scss";

export default class Welcome extends Component {
  render() {
    return (
      <div id={Styles.welcome}>
        <div className={Styles.column}>
          <h1>Welcome!</h1>
          <h2>This is my personal website.</h2>
        </div>
        <div className={[Styles.column, Styles.photo].join(" ")}>
          <a
            href="https://www.youtube.com/watch?v=WYwc31I6Dpk"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GlobalGameJam2018
          </a>
        </div>
      </div>
    );
  }
}
