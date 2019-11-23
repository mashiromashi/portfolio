import React, { Component } from "react";

class FloodmapBack extends Component {
  state = {};
  render() {
    return (
      <div className='col 12 m6'>
        <div className='card'>
          <div className='card-content' style={{ padding: "20px" }}>
            <h6 className='flow-text'>Flood Map Backend</h6>
            <p>
              Backend for the Flood Map and Water Level System Protype written
              in NodeJs using MongoDB as a database.
            </p>
          </div>
          <div className='card-action'>
            <a
              href='https://github.com/mashiromashi/FloodMapBackend'
              style={{ color: "white" }}
            >
              Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FloodmapBack;
