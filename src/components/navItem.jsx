import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./navItem.scss";

export default class NavItem extends Component {
  render() {
    return (
      <div className={Styles.navItem}>
        <Link to={this.props.redirect}>
          <div>{this.props.children}</div>
        </Link>
      </div>
    );
  }
}
