import { hot } from 'react-hot-loader/root';
import React from 'react';
import '../assets/canvas';
import { Landing } from './Landing/Landing';
import { About } from './About/About';

const App = () => (
  <>
    <Landing />
    <About />
  </>
);

// Using react-hot-reloader.
// It automatically ensures it is not executed in production and the footprint is minimal.
export default hot(App);
