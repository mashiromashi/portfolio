import React, { Component } from "react";

class Me extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className='col s12 center-align'>
          <div
            className='responsive-img center-align'
            style={{
              width: "300px",
              height: "300px",
              backgroundImage: "url(/img/IMG_8160.jpg)",
              backgroundSize: "cover",
              borderRadius: "100%",
              backgroundPosition: "right top",
              backgroundRepeat: "no-repeat",
              margin: "auto"
            }}
          />
        </div>

        <div
          className='center-align flow-text'
          style={{ color: "#D8DEE9", fontSize: "17px" }}
        >
          <p>Hello, my name's Cliff.</p>
          <p>I'm 23 years old now and a self-taught developer.
            I have been in this industry for almost a year. So I know my way around pretty well.</p>
          <p>
            I am looking for a job, please hire me to do your awesome website
            for your blooming business
          </p>
          <p>
            Since I'm passionate about technology, I'm always striving to learn
            new stuffs, which is why you can hire me with ease of mind.
          </p>
        </div>
        <p className='right-align' style={{ color: "#D8DEE9" }}>
          take a peek at my skills to see what I am capable of...
        </p>
      </div>
    );
  }
}

export default Me;
