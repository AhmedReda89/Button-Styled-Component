import React from "react";
import ReactDOM from "react-dom";
import { Btn } from "./Button";
import Menu from "./Menu";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Button Styled Component</h1>
      <button>Normal Button</button>
      <hr />
      <Btn primary icon>
        Our Custom Button
      </Btn>
      <hr />
      <Menu>
        <Menu.Item subIcon>test 2</Menu.Item>
        <Menu.Item label="Foo" icon>
          test 1
        </Menu.Item>
      </Menu>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
