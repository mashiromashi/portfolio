import React, { Component } from "react";
import IntroCard from "./IntroCard";
import SkillCard from "./SkillCard";
import InterestCard from "./InterestCard";

class MeCard extends Component {
  state = {};
  render() {
    return (
      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col s12 m12 l4">
          <div className="card">
            <div
              className="card-image"
              style={{ paddingTop: "10%", margin: "auto" }}
            >
              <div
                className="responsive-img center-align"
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: "url(/img/Me.jpg)",
                  backgroundSize: "cover",
                  borderRadius: "100%",
                  backgroundPosition: "left center",
                  backgroundRepeat: "no-repeat",
                  margin: "auto"
                }}
              />
            </div>
            <div className="card-content center-align">
              <h5>Htin Wana, 23</h5>
              <div
                style={{
                  fontSize: "2rem",
                  marginRight: "10px",
                  margin: "auto"
                }}
              >
                <a
                  href="https://github.com/mashiromashi"
                  style={{ color: "#D8DEE9" }}
                >
                  <i className="fab fa-github" style={{ padding: "12px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/htinwana"
                  style={{ color: "#D8DEE9" }}
                >
                  <i className="fab fa-linkedin" style={{ padding: "12px" }} />
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
