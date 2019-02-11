import React from "react";
import ReactDOM from "react-dom";
import Btn from "./Button";
import List from "./Menu";
import DropDownList from "./DropDownButton";

import "./styles.css";

function App() {
  const dummyData = ["test1", "test2", "test3", "test4"];
  return (
    <div className="App">
      <h1>Button Styled Component</h1>
      <Btn primary icon="mustache">
        Our Custom Button
      </Btn>
      <br />
      <Btn primary subIcon="chevron-down">
        Our Custom Button
      </Btn>
      <br />
      <Btn primary icon="mustache" subIcon="chevron-down">
        Our Custom Button
      </Btn>
      <br />
      <Btn icon="mustache" subIcon="chevron-down">
        Our Custom Button
      </Btn>
      <Btn icon="mustache" noLabel />
      <hr />
      <List>
        <List.Item subIcon>test 2</List.Item>
        <List.Item subIcon>test 2</List.Item>
        <List.Item label="Foo" icon>
          test 1
        </List.Item>
      </List>
      <hr />
      <DropDownList menuItems={dummyData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
