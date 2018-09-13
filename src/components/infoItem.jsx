import React, { Component } from "react";
import Styles from "./infoItem.scss";

export default class InfoItem extends Component {
  render() {
    return (
      <div className={Styles.infoItem}>
        <div className={Styles.header}>
          <h1>{this.props.name}</h1>
          <h2>{this.props.title}</h2>
        </div>
        <div className={Styles.description}>
          <span>{this.props.description}</span>
        </div>
        <div
          className={`${Styles.footer} ${this.props.working && Styles.active}`}
        >
          <div>{this.props.working ? "Active" : "Passive"}</div>
        </div>
      </div>
    );
  }
}
