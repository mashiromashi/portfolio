import React, { Component } from "react";
import "./HomePage.css";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "20%"
          }}
          className='col s12 m12 l12 center-align'
        >
          <div
            className='responsive-img center-align'
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: "url(/img/IMG_8160.jpg)",
              backgroundSize: "cover",
              borderRadius: "100%",
              backgroundPosition: "right top",
              backgroundRepeat: "no-repeat",
              margin: "auto"
            }}
          ></div>
          <h4
            style={{
              fontWeight: "bold",
              border: "1px",
              textShadow: "2px 2px #3b4252"
            }}
          >
            Htin Wana
            <h5 style={{}}>Full Stack Developer</h5>
          </h4>

          <div
            style={{
              fontSize: "3rem",
              marginRight: "10px",
              margin: "auto"
            }}
          >
            <a
              href='https://github.com/mashiromashi'
              style={{ color: "#D8DEE9" }}
            >
              <i className='fab fa-github' style={{ padding: "10px" }} />
            </a>
            <a
              href='https://www.linkedin.com/in/htinwana'
              style={{ color: "#D8DEE9" }}
            >
              <i className='fab fa-linkedin' style={{ padding: "10px" }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
