import React, { Component } from "react";
import Styles from "./code.scss";

export default class Code extends Component {
  render() {
    return (
      <div className={Styles.code}>
        <div className={Styles.rowNumber}>{this.props.rowNumber}</div>
        {this.props.children}
      </div>
    );
  }
}
