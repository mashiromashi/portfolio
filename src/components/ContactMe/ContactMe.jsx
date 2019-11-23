import React, { Component } from "react";

class ContactMe extends Component {
  state = {};
  render() {
    return (
      <div className='col s12 m6 l4 center-align'>
        <h5 style={{ color: "#E5E9F0", paddingBottom: "10%" }}>
          To get in touch with me or just wanna drop by and say hi
        </h5>

        <a href='mailto:htinwana.dev@gmail.com'>
          <i
            className='fa fa-envelope'
            style={{ fontSize: "5rem", color: "#E5E9F0" }}
          />
        </a>
        <h6 style={{ color: "#E5E9F0" }}>htinwana.dev@gmail.com</h6>
      </div>
    );
  }
}

export default ContactMe;
