import React, { Component } from "react";

class SkillCard extends Component {
  state = {};
  render() {
    return (
      <div className='col s12 m12 l8' style={{ marginTop: "1.5%" }}>
        <div className='card'>
          <div className='card-content'>
            <h5 style={{ fontSize: "2rem" }}>Skills</h5>
            <div
              style={{
                display: "flex",
                fontSize: "6rem",
                margin: "auto",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <i className='fab fa-react' style={{ color: "lightblue" }} />
              <i
                className='fab fa-vuejs'
                style={{ marginLeft: "5%", color: "#4fc08d" }}
              />
              <i
                className='fab fa-node-js'
                style={{ marginLeft: "5%", color: "#3c873a" }}
              />
            </div>
            <p className='right-align'>I also know how to use git as well !</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCard;
