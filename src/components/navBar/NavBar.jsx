import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className='nav-extended'>
        <div className='nav-content '>
          <div className='col s12'>
            <ul className='tabs tabs-transparent '>
              <li className='tab'>
                <a href='#home' className='active'>
                  Home
                </a>
              </li>
              <li className='tab'>
                <a href='#me' id='meTab'>
                  About Me
                </a>
              </li>
              <li className='tab '>
                <a href='#works' id='workTab'>
                  My Works
                </a>
              </li>
              <li className='tab '>
                <a href='#contactMe' id='contactMeTab'>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
