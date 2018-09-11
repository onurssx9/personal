import React, { Component } from "react";
import Styles from "./editor.scss";
import formatCodes from "../helpers/formatCodes.js";

export default class Editor extends Component {
  populateVariables() {
    const { information } = this.props;
    const variables = formatCodes(information);

    console.log(variables);

    return variables;
  }

  render() {
    return <div id={Styles.editor}>{this.populateVariables()}</div>;
  }
}
