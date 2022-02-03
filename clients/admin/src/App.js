import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import {Hello} from '@monorepo/ui';

const App = () => {
  return (
    <div className="App">
      <h1> <Hello/>, Admin. </h1>
    </div>
  );
}

export default hot(module)(App);
