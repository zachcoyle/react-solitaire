import React, { Component } from "react";
import { render } from "react-dom";

import withSolitaire from "../../src";

import Button from "./DemoButton";

const Demo = () => (
  <div>
    <h1>react-solitaire Demo</h1>
  </div>
);

const HelloWorld = () => <h1>Hello, World!</h1>;
const Emoji = () => <div style={{ fontSize: "82px" }}>🐈🦇🌚</div>;

const components = {
  HelloWorld,
  Emoji,
  Button
};

render(withSolitaire(components)(Demo), document.querySelector("#demo"));
