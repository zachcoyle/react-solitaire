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

const withBorder = Component => props => (
  <div style={{ padding: "20px", border: "5px solid red" }}>
    <Component {...props} />
  </div>
);

const withLink = Component => props => (
  <a href="#">
    <Component {...props} />
  </a>
);

render(
  withSolitaire({
    hocs: [withLink, withBorder],
    components: {
      HelloWorld,
      Emoji,
      Button
    }
  })(Demo),
  document.querySelector("#demo")
);
