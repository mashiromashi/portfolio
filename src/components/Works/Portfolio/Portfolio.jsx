import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className='col s12 m6'>
        <div className='card'>
          <div className='card-content'>
            <h6 className='flow-text'>Portfolio</h6>
            <p>The source code for this website. Made with love by Me</p>
          </div>
          <div className='card-action'>
            <a
              href='https://github.com/mashiromashi/portfolio'
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

export default Portfolio;
