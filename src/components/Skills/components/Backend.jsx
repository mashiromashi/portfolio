import React, { Component } from "react";

class Backend extends Component {
  state = {};
  render() {
    return (
      <div className="column">
        <div className="col s12 center-align">
          <h4 style={{ color: "#E5E9F0", paddingBottom: "25px" }}>Backend Skills</h4>

          <div style={{ display: "inline-flex" }}>
            <div
              id="node"
              style={{
                display: "inline-block",
                padding: "20px"
              }}
            >
              <img
                src="https://nodejs.org/static/images/logo.svg"
                alt=""
                height="100px"
              />
              <p style={{ color: "#E5E9F0" }}>Node</p>
            </div>
            <div
              style={{
                display: "inline-block",
                padding: "20px"
              }}
            >
              <div
                style={{
                  height: "100px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <img
                  src="https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png"
                  height="40px"
                />
              </div>

              <p style={{ color: "#E5E9F0" }}>Express</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Backend;
