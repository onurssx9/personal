import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.scss";

import picture from "../media/photos/profile.jpg";
import Social from "./social.jsx";

export default class Navbar extends Component {
  render() {
    return (
      <div id={Styles.navigation}>
        <div className={Styles.container}>
          <div className={Styles.profile}>
            <Link to="/">
              <img alt="Onur Şahin Şentürk" src={picture} />
            </Link>
          </div>
        </div>
        <div class={Styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <Social />
      </div>
    );
  }
}
