import React, { Component } from "react";
import Works from "../../components/Works/Works";
import ContactMe from "../../components/ContactMe/ContactMe";
import HomePage from "../HomePage/HomePage";
import MeCard from "../../components/Me/MeCard";

class MainPage extends Component {
  render() {
    return (
      <div className='container'>
        <section id='home'>
          <HomePage />
        </section>
        <section id='me'>
          <MeCard />
        </section>
        <section id='works' className='section scrollspy'>
          <Works />
        </section>
        <section id='contactMe' className='section scrollspy'>
          <ContactMe />
        </section>
      </div>
    );
  }
}

export default MainPage;
