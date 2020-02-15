import React, { Component } from "react";
import IntroCard from "./IntroCard";
import SkillCard from "./SkillCard";
import InterestCard from "./InterestCard";
import "./MeCard.css";
class MeCard extends Component {
  state = {};
  render() {
    return (
      <div className="row rowContainer">
        <div className="col s12 m12 l4">
          <div className="card">
            <div className="card-image cardImage">
              <div className="responsive-img center-align profileImage" />
            </div>
            <div className="card-content center-align">
              <h5>Htin Wana, 23</h5>
              <div className="icons">
                <a
                  href="https://github.com/mashiromashi"
                  style={{ color: "#D8DEE9" }}
                >
                  <i className="fab fa-github singleIcon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/htinwana"
                  style={{ color: "#D8DEE9" }}
                >
                  <i className="fab fa-linkedin singleIcon" />
                </a>
              </div>
              <p>
                <i className="fa fa-map-marker-alt" /> Mandalay, Myanmar
              </p>
              <p>
                Hi! I'm 23 years old and I'm a Web Developer. As a person who is
                passionate about technology, I am always seeking to learn and
                adapt new things.
              </p>
            </div>
          </div>
        </div>
        <IntroCard />
        <SkillCard />
        <InterestCard />
      </div>
    );
  }
}

export default MeCard;
