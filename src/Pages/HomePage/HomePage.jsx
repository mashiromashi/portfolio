import React, { Component } from "react";
import "./HomePage.css";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "13%"
          }}
          className="col s12 m12 l12 center-align"
        >
          <div className="responsive-img center-align meImage" />
          <h4
            style={{
              fontWeight: "bold",
              border: "1px",
              textShadow: "2px 2px #3b4252"
            }}
          >
            Htin Wana
          </h4>
          <h5>Web Developer</h5>
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
        </div>
      </div>
    );
  }
}

export default HomePage;
