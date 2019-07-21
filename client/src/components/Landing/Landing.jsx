import React from 'react';
import './Landing.scss';

export const Landing = () => (
  <section className="landing">
    <canvas id="canvas" className="canvas" width="936" height="1380" />
    <p className="landing-text">
      Hi, I'm <span className="landing-text-highlight">Floris Warmenhoven</span>.
    </p>
    <p className="landing-text"> I&apos;m a full-stack web developer.</p>
    <button className="landing-button" type="button">
      Learn more
    </button>
  </section>
);
