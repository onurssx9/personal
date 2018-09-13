import React, { Component } from "react";
import Styles from "./project.scss";

export default class Project extends Component {
  render() {
    return (
      <div className={Styles.project}>
        <div className={Styles.header}>
          <h1>{this.props.name}</h1>
        </div>
        <div className={Styles.description}>
          <span>{this.props.description}</span>
        </div>
        <div className={Styles.footer}>
          <a
            href={this.props.redirect}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          {this.props.repository !== "N/A" && (
            <a
              href={this.props.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          )}
        </div>
      </div>
    );
  }
}
