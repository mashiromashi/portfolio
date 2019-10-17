import React, { Component } from "react";

class Trinity extends Component {
  render() {
    return (
      <div className="col s12 center-align">
        <h3 style={{ paddingBottom: "25px", color: "#E5E9F0" }}>
          Frontend Related Skills
        </h3>
        <div style={{ display: "inline-flex" }}>
          <div
            id="css"
            style={{
              display: "inline-block",
              padding: "20px"
            }}
          >
            <img
              src="https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png"
              alt=""
              style={{
                height: "100px"
              }}
            />
            <p style={{ color: "#E5E9F0" }}>CSS</p>
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "20px"
            }}
          >
            <img
              src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
              alt=""
              style={{
                height: "100px"
              }}
            />
            <p style={{ color: "#E5E9F0" }}>HTML</p>
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "20px"
            }}
          >
            <img
              src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"
              alt=""
              style={{ height: "100px" }}
            />
            <p style={{ color: "#E5E9F0" }}>Javascript</p>
          </div>
        </div>

        <div class="col s12">
          <p style={{ color: "#E5E9F0" }}>
            The above three are the holy trinity I worship
          </p>
          <br />
        </div>
      </div>
    );
  }
}

export default Trinity;
