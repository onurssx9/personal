import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Styles from "./social.scss";

export default class Social extends Component {
  render() {
    return (
      <div id={Styles.social}>
        <SocialIcon url="https://www.facebook.com/onursahin.senturk" />
        <SocialIcon url="https://open.spotify.com/user/11129894719?si=jlbN_zunRueZEHSMTL25Rg" />
        <SocialIcon url="https://www.instagram.com/sgt.kaze/" />
        <SocialIcon url="https://www.linkedin.com/in/onur-%C5%9Fahin-%C5%9Fent%C3%BCrk-711a16a4/" />
      </div>
    );
  }
}
