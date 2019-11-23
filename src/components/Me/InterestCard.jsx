import React, { Component } from "react";

class InterestCard extends Component {
  state = {};
  render() {
    return (
      <div className='col s12 m12 l8 offset-l4'>
        <div className='card'>
          <div className='card-content'>
            <h5 style={{ fontSize: "2rem" }}>Interests</h5>
            <p>
              I enjoy learning new programming languages as a hobby as I am very
              intrigued by the new syntaxes and their purposes. I'm taking a
              course on Haskell and also currently learning Go as well. I also
              play games ! Check out my
              <a href='https://steamcommunity.com/id/mashiromashi'> Steam </a>
              as well. Feel free to invite me to games !
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InterestCard;
