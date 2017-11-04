import React, { Component } from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Section from './components/Section';
import Hero from './components/Hero';
import Me from './components/Me';
import Projects from './components/Projects';
import Works from './components/Works';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Section sectionId="me" sectionTitle="Me">
          <Me />
        </Section>
        <Section sectionId="projects" sectionTitle="Projects">
          <Projects />
        </Section>
        <Section sectionId="works" sectionTitle="Works">
          <Works />
        </Section>
        <Footer />
      </div>
    );
  }
}

export default Home;
