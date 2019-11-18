import React, { Component } from "react";
import Skills from "../../components/Skills/Skills";
import Me from "../../components/Me/Me";
import Works from "../../components/Works/Works";
import ContactMe from "../../components/ContactMe/ContactMe";

class MainPage extends Component {
  render() {
    return (
      <div className='container' >
        <section id='me' >
          <Me />
        </section>
        <section id='skills' className='section scrollspy'  >
          <Skills />
        </section>
        <section id='works' className='section scrollspy' >
          <Works />
        </section>
        <section id='contactMe' className='section scrollspy' >
          <ContactMe />
        </section>
      </div>
    );
  }
}

export default MainPage;
