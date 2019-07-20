import { hot } from "react-hot-loader/root";
import React from "react";

const App = () => {
  let value = 5;

  return (
    <>
      <h1>Boilerplate</h1>
      {console.log({ value })}
    </>
  );
};

// Using react-hot-reloader.
// It automatically ensures it is not executed in production and the footprint is minimal.
export default hot(App);
