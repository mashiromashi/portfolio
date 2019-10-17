import React, { Component } from "react";

class Others extends Component {
  render() {
    return (
      <div className="column">
        <div className="col s12 center-align">
          <h4 style={{ color: "#E5E9F0", paddingBottom: "25px" }}>Other Skills</h4>
          <div style={{ display: "inline-flex" }}>
            <div
              id="git"
              style={{
                display: "inline-block",
                padding: "20px"
              }}
            >
              <img
                src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                alt=""
                style={{ height: "80px" }}
              />
              <p style={{ color: "#E5E9F0" }}>Github </p>
            </div>

            <div
              id="sql"
              style={{
                display: "inline-block",
                padding: "20px"
              }}
            >
              <img
                src="https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png"
                alt=""
                style={{ height: "80px" }}
              />
              <p style={{ color: "#E5E9F0" }}>MySQL</p>
            </div>
            <div
              style={{
                display: "inline-block",
                padding: "20px"
              }}
              id="mongodb"
            >
              <img
                src="https://seeklogo.com/images/M/mongodb-logo-427DDF8FDE-seeklogo.com.png"
                alt=""
                style={{ height: "80px" }}
              />
              <p style={{ color: "#E5E9F0" }}>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Others;
