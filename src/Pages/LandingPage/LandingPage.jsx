import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/navBar/NavBar";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <header>
          <NavBar />
        </header>
        <div>
          <MainPage />
        </div>
      </div>
    );
  }
}

export default LandingPage;
