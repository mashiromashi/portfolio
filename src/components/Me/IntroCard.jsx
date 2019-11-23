import React, { Component } from "react";

class IntroCard extends Component {
  state = {};
  render() {
    return (
      <div className='col s12 m12 l8'>
        <div className='card'>
          <div className='card-content'>
            <h5 style={{ fontSize: "2rem" }}>Introduction</h5>
            <p>
              Having being introduced to technology as a kid, I was always
              curious about what's behind the curtain. I got into coding a year
              ago and making fast progress. Currently, I'm looking for freelance
              jobs as well as full-time. Fun fact, I'm language agnostic, so I'm
              pretty much open to most of the languages.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroCard;
