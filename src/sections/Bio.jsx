import React from 'react';
import Nav from '../components/Nav.jsx';
import Social from '../components/Social.jsx';

export default function Bio() {
  return (
    <section id="bio">
      <div id="info">
        <h1>Jerrod Varney</h1>
        <h2>Full Stack Software Engineer</h2>
        <p id="tagline">I’m a software engineer and entrepreneur passionate about building practical, high-impact solutions.</p>
        <Nav />
      </div>
      <Social />
    </section>
  );
}
