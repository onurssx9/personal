import React, { Component } from "react";
import Styles from "./projects.scss";
import Data from "../data/onur.json";
import Project from "./project.jsx";

export default class Projects extends Component {
  populateProjects() {
    const { projects } = Data;

    return projects.map((project, index) => {
      return (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          redirect={project.url}
          repository={project.repo}
        />
      );
    });
  }

  render() {
    return <div id={Styles.projects}>{this.populateProjects()}</div>;
  }
}
