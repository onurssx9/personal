import React, { Component } from "react";
import Styles from "./about.scss";
import InfoItem from "./infoItem.jsx";
import Data from "../data/onur.json";

export default class About extends Component {
  populateInfo() {
    const { jobs } = Data;

    return jobs.map((job, index) => {
      return (
        <InfoItem
          key={index}
          name={job.company}
          title={job.title}
          description={job.description}
          working={job.working}
        />
      );
    });
  }

  populateSkills() {
    const { skills } = Data;

    return skills.map((skill, index) => {
      return (
        <div key={index} className={Styles.box}>
          {skill}
        </div>
      );
    });
  }

  populateHobbies() {
    const { hobbies } = Data;

    return hobbies.map((hobby, index) => {
      return (
        <div key={index} className={`${Styles.box} ${Styles.hobby}`}>
          {hobby}
        </div>
      );
    });
  }

  render() {
    return (
      <div id={Styles.about}>
        <div className={Styles.column}>{this.populateInfo()}</div>
        <div className={Styles.column}>
          {[this.populateSkills(), this.populateHobbies()]}
        </div>
      </div>
    );
  }
}
