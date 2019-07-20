import { hot } from 'react-hot-loader/root';
import React from 'react';
import '../assets/canvas';

const App = () => (
  <>
    <section className="flex">
      <div id="pt" className="canvas">
        <canvas id="canvas" width="936" height="1380" />
      </div>
      <div className="flex">
        <div className="text">Milo is een eindbaas</div>
        <div className="button">Hello there</div>
      </div>
    </section>
  </>
);

// Using react-hot-reloader.
// It automatically ensures it is not executed in production and the footprint is minimal.
export default hot(App);
