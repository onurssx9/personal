import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.scss";

import picture from "../media/photos/profile.jpg";
import Social from "./social.jsx";
import NavItem from "./navItem.jsx";

export default class Navbar extends Component {
  render() {
    return (
      <div id={Styles.navigation}>
        <div className={`${Styles.container} rainbow`}>
          <div className={Styles.profile}>
            <Link to="/">
              <img alt="Onur Şahin Şentürk" src={picture} />
            </Link>
          </div>
        </div>
        <div className={Styles.links}>
          <NavItem color="blue" redirect="/">
            Home
          </NavItem>
          <NavItem color="green" redirect="/about">
            About
          </NavItem>
          <NavItem color="red" redirect="/projects">
            Projects
          </NavItem>
        </div>
        <Social />
      </div>
    );
  }
}
