import React, { Component } from "react";
import FloodmapFront from "./FloodmapFront/FloodmapFront";
import FloodmapBack from "./FloodmapBack/FloodmapBack/FloodmapBack";
import Portfolio from "./Portfolio/Portfolio";

class Works extends Component {
  state = {};
  render() {
    return (
      <div className='row'>
        <div className='center-align'>
          <h3 style={{ color: "#D8DEE9" }}>Personal Projects</h3>
        </div>
        <FloodmapFront />
        <FloodmapBack />
        <Portfolio />
      </div>
    );
  }
}
export default Works;
