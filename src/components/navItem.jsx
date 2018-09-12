import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./navItem.scss";

export default class NavItem extends Component {
  render() {
    const path = window.location.pathname;
    return (
      <div
        className={`${Styles.navItem} ${this.props.color} ${
          path === this.props.redirect ? Styles.active : ""
        }`}
      >
        <Link to={this.props.redirect}>
          <div>{this.props.children}</div>
        </Link>
      </div>
    );
  }
}
