import React, { Component } from "react";
import "./ContactMe.css";
class ContactMe extends Component {
  state = {};
  render() {
    return (
      <div className="col s12 m6 l4 contactMe">
        <h1 style={{ color: "#E5E9F0" }}>
          Don't be a stranger,
          <br /> just say hello.
        </h1>
        <p className="flow-text">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="col s6 m3 l2 gridDisplay">
          <div className="gridItem">
            <p className="needHelp">Need Help?</p>
            <h5>htinwana.dev@gmail.com</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
